import "./newUser.css";

export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <lable>Username</lable>
          <input type="text" placeholder="enter username" />
        </div>
        <div className="newUserItem">
          <lable>Full Name</lable>
          <input type="text" placeholder="enter full name" />
        </div>
        <div className="newUserItem">
          <lable>Email</lable>
          <input type="email" placeholder="@email.com" />
        </div>
        <div className="newUserItem">
          <lable>Password</lable>
          <input type="password" placeholder="enter password" />
        </div>
        <div className="newUserItem">
          <lable>Phone</lable>
          <input type="text" placeholder="+1 2349....." />
        </div>
        <div className="newUserItem">
          <lable>Address</lable>
          <input type="text" placeholder="Berlin Germany" />
        </div>
        <div className="newUserItem">
          <lable>Gender</lable>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Other</label>
          </div>
        </div>
        <div className="newUserItem">
          <lable>Active</lable>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="newUserButton">Create</button>
      </form>
    </div>
  );
}
