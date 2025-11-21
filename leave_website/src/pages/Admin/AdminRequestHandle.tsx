import React, { useEffect, useState } from 'react';
import { getAllLeaveRequest } from "../../services.tsx";
import { updateStatus } from '../../services.tsx';
import { Link } from 'react-router-dom';


interface LeaveRequestType {
  id: string;
  createdAt: any;
  updatedAt: any;
}


const AdminRequestHandle: React.FC = () => {

  const [leaveRequest, setLeaveRequest ] = useState<LeaveRequestType[]>();
  const [updatingIds, setUpdatingIds] = useState<string[]>([]);
  useEffect(()=> {

    const fetchRequests = async () => {

      try {
        const result = await getAllLeaveRequest();   
        setLeaveRequest(result);
    
      } catch (err) {
        console.log(err);
      }
    };
    
    fetchRequests();
  }, [])

  const handleUpdateStatus = async (id: string, newStatus: string) => {
    try {
      // Disable button for this ID
      setUpdatingIds((prev) => [...prev, id]);

      const success = await updateStatus(id, newStatus);
      if (success) {
        // Refresh leave requests after update
        const refreshed = await getAllLeaveRequest();
        setLeaveRequest(refreshed);
      }
    } catch (err) {

      console.error(err);
    } finally {
      // Re-enable button after update
      setUpdatingIds((prev) => prev.filter((uid) => uid !== id));
    }
  };
  console.log(leaveRequest)

  return (
   <section className='w-full px-4 mx-auto py-8'>

            <div className="mb-8 md:text-center lg:text-center">

              <div>
                  <h1 className="text-4xl font-bold mb-2 text-primary">
                    Leave Requests
                  </h1>
                
                  <p className="text-secondary text-sm md:text-lg">
                    Manage and track all military leave applications
                  </p>
              </div>

              <div className='bg-primary mt-8 rounded p-5'>
                <button className='bg-orange-500 p-4 rounded-lg w-50 text-white font-bold'>
                  {<Link to={'/'}>Home</Link>}
                </button>
              </div>
          
            </div>


            
      <div className="grid grid-cols-1   md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">

        {leaveRequest?.map((req: any) => (
          <div
            key={req.id}
            className="p-6 bg-primary shadow-md rounded-xl border text-white border-gray-200 flex flex-col gap-5"
          >
            <div>
              <h3 className="text-lg font-bold ">Sender's Name</h3>
              <p className="text-secondary">{req?.fullName}</p>
            </div>

            <div>
              <h3 className="font-semibold ">Email</h3>
              <p className="text-secondary">{req.email}</p>
            </div>

            <div>
              <h3 className="font-semibold ">Phone Number</h3>
              <p className="text-secondary">{req.phoneNumber}</p>
            </div>

            <div>
              <h3 className="font-semibold ">Leave Type</h3>
              <p className="text-secondary">{req.type}</p>
            </div>

            <div>
              <h3 className="font-semibold ">Military ID</h3>
              <p className="text-secondary">{req.militaryId}</p>
            </div>

            <div>
              <h3 className="font-semibold ">Status</h3>
              <p className="text-secondary">{req.status}</p>

              <button
                type="button"
                onClick={() => handleUpdateStatus(req.id, "approved")}      
                className={`mt-2 px-4 py-2 rounded text-white ${updatingIds.includes(req.id) ? "bg-gray-400 cursor-not-allowed" : "bg-green-500"
                  }`} >
                Approve
              </button>
            </div>
          </div>
        ))}
      </div>
            
   </section>
  )
}

export default AdminRequestHandle
