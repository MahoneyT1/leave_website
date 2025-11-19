import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
    getEmergency, getCompassionate, getHumanitarian,
    updateEmergency, updateCompassionate, updateHumanitarian
} from '../../services';

type LeaveType = 'emergency' | 'compassionate' | 'humanitarian';

interface LeaveDoc {
    id: string;
    price: number;
}

const AdminLayout: React.FC = () => {
         const [leaves, setLeaves] = useState<Record<LeaveType, LeaveDoc | null>>({
   emergency: null,
        compassionate: null,
        humanitarian: null
    });

    const { register, handleSubmit, reset, formState: { errors } } = useForm<{ type: LeaveType, price: string }>({});

    const [updatePrice, setUpdatePrice] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUpdatePrice(e.target.value);
    };

    // Fetch all leave types on mount
    useEffect(() => {
        const fetchLeaves = async () => {
            try {
                const [emergencyData, compassionateData, humanitarianData] = await Promise.all([
                    getEmergency(),
                    getCompassionate(),
                    getHumanitarian()
                ]);

                setLeaves({
                    emergency: emergencyData[0] || null,
                    compassionate: compassionateData[0] || null,
                    humanitarian: humanitarianData[0] || null
                });

                // Default input value to the emergency price
                const emergency = emergencyData[0] as LeaveDoc | undefined;
                setUpdatePrice(emergency?.price?.toString() || '');
            } catch (err) {
                console.log(err);
            }
        };
        fetchLeaves();
    }, []);

    // Map leave type to update function
    const updateFunctionMap: Record<LeaveType, (id: string, data: any) => Promise<void>> = {
        emergency: updateEmergency,
        compassionate: updateCompassionate,
        humanitarian: updateHumanitarian
    };

    const onSubmit = async (data: { type: LeaveType; price: string }) => {
        const { type, price } = data;
        const leaveDoc = leaves[type];

        if (!leaveDoc) {
            console.error(`No document found for ${type}`);
            return;
        }

        try {
            await updateFunctionMap[type](leaveDoc.id, { price: Number(price) });
            setLeaves(prev => ({
                ...prev,
                [type]: { ...leaveDoc, price: Number(price) }
            }));
            setUpdatePrice(price);
            console.log(`${type} price updated successfully`);
            reset();
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <section className="w-full h-screen bg-primary">
            <div className="container px-4 mx-auto md:px-50 lg:px-70">
                <div className="grid grid-cols-1">
                    <div className="p-2 mt-10">
                        <div className="text-center text-white">
                            <h1 className="text-2xl font-bold">Edit Leave Prices</h1>
                        </div>

                        <div className="text-lg text-center">
                            <h4 className="text-primary font-bold">All Prices</h4>
                            <div className="text-white mb-5">
                                <p>Emergency: ${leaves.emergency?.price}</p>
                                <p>Compassionate: ${leaves.compassionate?.price}</p>
                                <p>Humanitarian: ${leaves.humanitarian?.price}</p>
                            </div>

                            <form onSubmit={handleSubmit(onSubmit)}>
                                <select
                                    {...register("type", { required: true })}
                                    className="bg-white text-center mt-5 w-full rounded mb-4"
                                    defaultValue="emergency"
                                    onChange={(e) => {
                                        const type = e.target.value as LeaveType;
                                        setUpdatePrice(leaves[type]?.price?.toString() || '');
                                    }}
                                >
                                    <option value="emergency">Emergency</option>
                                    <option value="compassionate">Compassionate</option>
                                    <option value="humanitarian">Humanitarian</option>
                                </select>

                                <input
                                    type="text"
                                    {...register('price', { required: "Must include value to update" })}
                                    value={updatePrice}
                                    onChange={handleInputChange}
                                    className="border rounded-lg w-full border-white bg-white mb-4"
                                />
                                {errors.price && <p className="text-red-500">{errors.price.message}</p>}

                                <div className="flex justify-center items-center gap-5 mt-5">
                                    <button type="submit" className="border w-30 p-1 bg-green-500">
                                        Update
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AdminLayout;
