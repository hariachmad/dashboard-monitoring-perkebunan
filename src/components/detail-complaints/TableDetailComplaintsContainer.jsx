import axios from "axios";
import { useEffect, useState } from "react";
import { TableDetailComplaint } from "./TableDetailComplaints";

export const TableDetailComplaintsContainer = ()=> {
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:4000/complaint');
          setComplaints(response.data);
        } catch (err) {
          console.error(err);
        }
      };

      fetchData();
  }, []);

  return <>
    <TableDetailComplaint props={complaints}></TableDetailComplaint>
  </>
};
