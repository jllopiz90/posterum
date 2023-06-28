import React, { useState } from "react";
import type { WeekSelection } from "../../functions/calendarHelpers/helper";
import { generateCalendar } from "../../functions/calendarHelpers/helper";
import "../../css/global.module.css";

const usersFromLocalStorage =
  window?.localStorage !== undefined && localStorage.getItem("calendar-users");

function IndexPage() {
  const [users, setUsers] = useState<string[]>(() =>
    usersFromLocalStorage ? JSON.parse(usersFromLocalStorage) : []
  );
  const [userInput, setuserInput] = useState("");
  const [allowRemoveUsers, setAllowRemoveUsers] = useState(false);
  const [calendar, setCalendar] = useState<WeekSelection[]>([]);

  const handleInsertUsers = () => {
    if (userInput) {
      setUsers((currentUsers) => [...currentUsers, userInput]);
      setuserInput("");
    }
  };

  const handleRemoveUser = (user) => {
    setUsers((currentUsers) =>
      currentUsers.filter((current) => current !== user)
    );
  };

  const handleOnUserTextChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setuserInput(event.target.value);
  };

  const onSaveUsers = () => {
    localStorage.setItem("calendar-users", JSON.stringify(users));
  };

  const onGenerateCalendar = () => {
    console.log("calling generate calendar");
    const calendarAux = generateCalendar(users);
    console.log("calendar generated", calendarAux);
    setCalendar(calendarAux);
  };

  return (
    <div style={{ padding: "10px 20px" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <label>Insert User:</label>
        <input
          type="text"
          id="user-input"
          name="user"
          onChange={handleOnUserTextChange}
          value={userInput}
        />
        <button
          onClick={handleInsertUsers}
          style={{ backgroundColor: "white" }}
        >
          Insert
        </button>
      </div>
      <div style={{ marginTop: 20 }}>
        <button
          onClick={() => setAllowRemoveUsers(!allowRemoveUsers)}
          style={{ backgroundColor: "white" }}
        >
          {allowRemoveUsers ? "Disable" : "Enable"} remove users
        </button>
        <button
          style={{ backgroundColor: "white", marginLeft: 10 }}
          onClick={onSaveUsers}
        >
          Save users
        </button>
        <p style={{ fontSize: 11 }}>
          If want to remove an user, just enable remove users and click on it.
        </p>
        <div style={{ display: "flex", gap: 10 }}>
          {users.map((user, index) => (
            <button
              onClick={() => handleRemoveUser(user)}
              disabled={!allowRemoveUsers}
              style={{ backgroundColor: "white" }}
              key={`${user}_${index}`}
            >
              {user}
            </button>
          ))}
        </div>
      </div>
      <div style={{ marginTop: 20 }}>
        <button
          onClick={onGenerateCalendar}
          style={{ backgroundColor: "white" }}
        >
          Generate Calendar
        </button>
      </div>
      <div style={{ marginTop: 20 }}>
        <table>
          <thead>
            <tr>
              <th>Week</th>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Thursday</th>
              <th>Friday</th>
            </tr>
          </thead>
          <tbody>
            {calendar.map((week, index) => (
              <tr key={`week_${index}`}>
                <td>Week {index + 1}</td>
                <td>{week.Mon.join(", ")}</td>
                <td>{week.Tue.join(", ")}</td>
                <td>{week.Wed.join(", ")}</td>
                <td>{week.Thu.join(", ")}</td>
                <td>{week.Fri.join(", ")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default IndexPage;
