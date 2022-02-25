import './App.css';

// Example of a data array that
// you might receive from an API
const data = [
  { name: "Shalna", email: "sbradder0@mlb.com ", mobile: "+420 255 991 3525", dob: "25.03.1984 ",jobType:"Consultant",Action:"Pic | Edit | Delete" },
  { name: "Abie", email: "abrisbane1@jimdo.com ", mobile: "+47 228 583 9463", dob: "12.07.1990 ",jobType:"Part Time",Action:"Pic | Edit | Delete" },
  { name: "Johanna", email: "jjoannidi2@delicious.com ", mobile: "+7 525 409 6303", dob: "12.10.1986 ",jobType:"Consultant ",Action:"Pic | Edit | Delete" },
  { name: "Fax", email: "fcromwell3@dell.com ", mobile: "+1 692 651 3855 ", dob: "26.04.1985",jobType:"Part Time",Action:"Pic | Edit | Delete" },
  { name: "Jasmine", email: "jcassell4@msn.com ", mobile: "+385 707 676 7442", dob: "15.09.1998",jobType:"Full Time",Action:"Pic | Edit | Delete" },
  { name: "Bondon", email: "bhawtin5@infoseek.co.jp ", mobile: "+505 725 624 0025 ", dob: "10.06.1980",jobType:"Consultant",Action:"Pic | Edit | Delete" },
]

function App() {
  return (

    <div>
      <div class="container">
        <div class="row mt-4">
          <div class="col-sm-12">
            <div class="my-fieldset">
              <p class="login-legend">Regestration</p>
              {/* <table>
                <tr><td>Username</td><td><input type="text" /></td></tr>
                <tr><td>Password</td><td><input type="text" /></td></tr>
              </table> */}
              <div class="row">
                <div class="col-sm-2">
                  Full Name:
                </div>
                <div class="col-sm-4">
                  <input type="text"></input>
                </div>
                <div class="col-sm-2">
                  Profile Pic
                </div>
                <div class="col-sm-4">

                  <div class="Neon Neon-theme-dragdropbox">
                    <input class="ipclass" name="files[]" id="filer_input2" multiple="multiple" type="file" />
                    <div class="Neon-input-dragDrop"> <div class="Neon-input-inner">
                      <div class="Neon-input-icon"><i class="fa fa-file-image-o"></i></div>
                      <div class="Neon-input-text"><h3>Drag&amp;Drop Photos here</h3> <span class="spclass">or</span></div>
                      <a class="Neon-input-choose-btn blue">Browse Photos</a></div></div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-2">
                  Mobile:
                </div>
                <div class="col-sm-4">
                  <input type="text"></input>
                </div>
                <div class="col-sm-2">
                  Email:
                </div>
                <div class="col-sm-4">
                  <input type="text"></input>
                </div>
              </div>
              <div class="row mt-2">
                <div class="col-sm-2">
                  Job Type:
                </div>
                <div class="col-sm-4">
                  <div class="btn-group btn-group-toggle" data-toggle="buttons">
                    <label class="btn btn-outline-primary active">
                      <input type="radio" name="options" id="option1" autocomplete="off" checked /> FT
                    </label>
                    <label class="btn btn-outline-primary">
                      <input type="radio" name="options" id="option2" autocomplete="off" /> PT
                    </label>
                    <label class="btn btn-outline-primary">
                      <input type="radio" name="options" id="option3" autocomplete="off" /> Consultant
                    </label>
                  </div>
                </div>
                <div class="col-sm-2">
                  DOB:
                </div>
                <div class="col-sm-4">
                  <input type="date" class="inpcls" placeholder='mm/dd/yyyy'></input>
                </div>
              </div>
              <div class="row mt-4">
                <div class="col-sm-12">
                  Pref.Location <input type="checkbox" /> Chennai
                </div>
               
              </div>
              <div class="row mt-4">
                <div class="col-sm-12">
                  <button class="btn btn-primary float-right">+Add/Update</button>
                </div>
               
              </div>
            </div>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-sm-12">
            <table class="table">
              <thead>
                <tr>
                  <th>Name<i class="fa fa-fw fa-sort"></i></th>
                  <th>Email<i class="fa fa-fw fa-sort"></i></th>
                  <th>Mobile<i class="fa fa-fw fa-sort"></i></th>
                  <th>DOB<i class="fa fa-fw fa-sort"></i></th>
                  <th>Job Type<i class="fa fa-fw fa-sort"></i></th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data.map((val, key) => {
                  return (
                    <tr key={key}>
                      <td>{val.name}</td>
                      <td>{val.email}</td>
                      <td>{val.mobile}</td>
                      <td>{val.dob}</td>
                      <td>{val.jobType}</td>
                      <td>{val.Action}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;