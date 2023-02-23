import GuestGreetings from "./GuestGeetings";
import UserGreetings from "./UserGreetings";

const Greeting = (props)=>{
      if(props.isLoggedIn){
        return <UserGreetings />;
      } else {
        return <GuestGreetings />;
      }

}
export default Greeting;