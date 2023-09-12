const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  return (
    <div className="app">
    <div className="sidebar">
      <FriendList/>
      <FormAddFriend/>
      
    </div>
    </div>
  )
}


function FriendList()
{ 
  const friends=initialFriends;
  return(
    <ul className="">
         {friends.map((friend)=>(
            <Friend key={friend.id} friend={friend}/>
         ))}
    </ul>
  )
}

function Friend({friend}){
  return(
    <li>
        <img src={friend.image} alt={friend.name} />
        <h3>{friend.name}</h3>

        {friend.balance<0 && (
          <p className="red">
            You owe {friend.name} {Math.abs(friend.balance)} $
          </p>
        )}

        {friend.balance>0 && (
          <p className="green">
            {friend.name} owes you {Math.abs(friend.balance)} $
          </p>
        )}

        {friend.balance===0 && (
          <p className="">
            You and your friend {friend.name} are even\. No need to pay each other
          </p>
        )}

        <Button>Select</Button>
    </li>
  )
}


function Button({children}){
  return(
    <button className="button">
      {children}
    </button>
  )
}


function FormAddFriend(){
  return(
    <form className="form-ad-friend">
      <label>Friend Name</label>
      <input type="text" placeholder="Type your friend name"/>

      <label>Image Url</label>
      <input type="text" placeholder="Type your friend image url"/>

      <Button>Add Friend</Button>
    </form>
  )
}