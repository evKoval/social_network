import React, {useState} from "react";

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    const activateEditMode = () => {
        setEditMode(true)
    };

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    };

    const onStatusChange = (ev) => {
        setStatus(ev.currentTarget.value)
    };

    return (
        <div>
            { !editMode &&
                <div>
            <span onDoubleClick={activateEditMode}>
              {props.status || "======"}
            </span>
                </div>
            }
            {editMode && (
                <div>
                    <input value={status} onChange={onStatusChange} onBlur={deactivateEditMode} autoFocus={true}/>
                </div>
            )}
        </div>
    );
}

    export default ProfileStatusWithHooks;


