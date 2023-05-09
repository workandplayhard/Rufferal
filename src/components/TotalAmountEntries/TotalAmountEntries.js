import React from 'react';
import './TotalAmountEntries.css';

function TotalAmountEntries(props) {
  return (
    <div className='TotalEntriesContainer'>
        <div
          className="TotalEntries_Inner_Heading_2"
          style={{ textAlign: "center" }}
        >
          Total Amount of Entries{" "}
          <span className="TotalEntries_Text_1">
            {" "}
            <span style={{ opacity: "0.6" }}>
              (Total amount of entries to complete Giveaway )
            </span>
          </span>{" "}
        </div>

        <div
          className="TotalEntries_Seg_2"
          style={{ display: "flex", justifyContent: "center", marginLeft: 55, width: 400 }}
        >
          <input type="text" className="TotalEntries_Seg_2_Input" required onChange={(event) => { props.totalEntriesData(event.target.value) }} />
        </div>
    </div>
  );
}

export default TotalAmountEntries;