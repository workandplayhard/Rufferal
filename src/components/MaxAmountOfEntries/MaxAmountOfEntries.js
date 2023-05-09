import "./MaxAmountOfEntries.css"

function MaxAmountOfEntries(props) {
    return (
        <div >
            <div
                className="MaxEntries_Inner_Heading_2"
                style={{ textAlign: "center", marginTop: 30 }}
            >
                Max Amount of Entries per User{" "}
                <span className="MaxEntries_Text_1">
                    {" "}
                    <span style={{ opacity: "0.6" }}>
                        (Max amount of entries allowed per User)
                    </span>
                </span>{" "}
            </div>

            <div
                className="MaxEntries_2_Seg_2"
                style={{
                    marginBottom: "10px",
                    display: "flex",
                    justifyContent: "center",
                    
                    width: 400
                }}
            >
                <input type="text" className="MaxEntries_Seg_2_Input" required onChange={(event) => { props.maxEntriesEachData(event.target.value) }} />
            </div>
        </div>
    );
}

export default MaxAmountOfEntries;