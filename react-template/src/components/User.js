function User({name,isLog}){
  console.log(name);
  return(
    <div>
    <h1>{!isLog ? `${name}` : "loadads"}</h1>
    </div>
  )
}
export default User;
