import React, { useEffect, useState } from "react";
import { getUserLeaveRequests } from "../services";
import { CircleCheck, Calendar } from "lucide-react";


const UserProfile: React.FC = () => {
    const [requests, setRequests] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [pending, setPending] = useState("");
    const [rejected, setRejected] = useState("");
    const [approved, setApproved] = useState("");
    const [totalRequest, setTotalRequest] = useState("");

    useEffect(() => {
        const fetchRequests = async () => {
            try {
                const data = await getUserLeaveRequests();
                console.log(data)
                setRequests(data || []);
                setTotalRequest(String(data?.length || 0));

                let pendingCount = 0;
                let approvedCount = 0;
                let rejectedCount = 0;

                data?.forEach((item: any) => {
                    const status = item?.status;
                    if (status === "pending") pendingCount++;
                    else if (status === "approved") approvedCount++;
                    else if (status === "rejected") rejectedCount++;
                });

                setPending(String(pendingCount));
                setApproved(String(approvedCount));
                setRejected(String(rejectedCount));
            } catch (err) {
                console.error("Error fetching requests:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchRequests();
    }, []);
    console.log()

    if (loading) return <p className="text-center mt-10">Loading...</p>;

    return (
        <section className="w-full">
            <div className="container mx-auto px-4 py-25 pb-3">

                <div className="mb-8 px-2 md:text-center lg:text-center">
                    <h1 className="text-4xl font-bold mb-2 text-primary ">Leave Requests</h1>
                    <p className="text-secondary lg:text-2xl">Track the status of your leave applications</p>
                </div>

                <div className="grid gap-4 md:grid-cols-4 mb-8">
                    {/* Total Requests */}
                    <div className="rounded-lg border bg-card text-primary shadow-sm">
                        <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">

                            <h3 className="tracking-tight text-sm font-medium">
                                Total Requests
                            </h3>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text h-4 w-4 text-muted-foreground">
                                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                                <path d="M14 2v4a2 2 0 0 0 2 2h4" />
                                <path d="M10 9H8" />
                                <path d="M16 13H8" />
                                <path d="M16 17H8" />
                            </svg>
                        </div>
                        <div className="p-6 pt-0">
                            <div className="text-2xl font-bold">{totalRequest}</div>
                        </div>
                    </div>

                    {/* Pending */}
                    <div className="rounded-lg border bg-card text-primary shadow-sm">
                        <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
                            <h3 className="tracking-tight text-sm font-medium">Pending</h3>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock h-4 w-4 text-yellow-600">
                                <circle cx="12" cy="12" r="10" />
                                <polyline points="12 6 12 12 16 14" />
                            </svg>
                        </div>
                        <div className="p-6 pt-0">
                            <div className="text-2xl font-bold">{pending}</div>
                        </div>
                    </div>

                    {/* Approved */}
                    <div className="rounded-lg border bg-card text-primary shadow-sm">
                        <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
                            <h3 className="tracking-tight text-sm font-medium">Approved</h3>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big h-4 w-4 text-green-600">
                                <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                                <path d="m9 11 3 3L22 4" />
                            </svg>
                        </div>
                        <div className="p-6 pt-0">
                            <div className="text-2xl font-bold">{approved}</div>
                        </div>
                    </div>

                    {/* Rejected */}
                    <div className="rounded-lg border bg-card text-primary shadow-sm">
                        <div className="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
                            <h3 className="tracking-tight text-sm font-medium">
                                Rejected
                            </h3>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-x h-4 w-4 text-red-600">
                                <circle cx="12" cy="12" r="10" />
                                <path d="m15 9-6 6" />
                                <path d="m9 9 6 6" />
                            </svg>
                        </div>
                        <div className="p-6 pt-0">
                            <div className="text-2xl font-bold">{rejected}</div>
                        </div>
                    </div>
                </div>

                <div className="mt-10 mb-5">
                    <div className="flex items-center justify-between mb-4">
                        <h2 className="text-2xl font-semibold text-center text-primary">Your Applications</h2>
                    </div>

                    <div className="container mx-auto px-4 py-6">
                        {requests && requests.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {requests.map((item: any, index: number) => (
                                    <div key={index} className="bg-card text-card-foreground rounded-lg shadow-md hover:shadow-lg transition-shadow p-4 flex flex-col justify-between">
                                        {/* Header */}
                                        <div className="flex justify-between items-start mb-4">
                                            <div>
                                                <div className="flex items-center gap-2 mb-1">
                                                    <CircleCheck size={16} className="text-green-400" />
                                                    <h3 className="text-lg font-semibold text-primary">{item.type}</h3>
                                                </div>
                                                <p className="text-sm text-secondary flex items-center gap-1">
                                                    <Calendar size={14} className="text-green-500" />
                                                    Submitted on {item?.createdAt ? item.createdAt.toDate().toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" }) : "N/A"}
                                                </p>
                                            </div>

                                            <div className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${item.status === "pending" ? "bg-yellow-100 text-yellow-800" : item.status === "approved" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                                                {item.status}
                                            </div>
                                        </div>

                                        {/* Reason */}
                                        <div className="mt-2">
                                            <p className="text-sm font-medium text-primary mb-1">Reason:</p>
                                            <p className="text-sm text-secondary">{item?.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-center text-muted-foreground mt-6">No leave requests found.</p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UserProfile;