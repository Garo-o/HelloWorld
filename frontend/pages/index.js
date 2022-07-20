import SockJs from "sockjs-client";

export default function Home() {
  function connection() {
    let socket = new SockJs("http://localhost:8080/stomp/chat");
    console.log(socket);
  }

  return (
    <>
      <h1>룸 화면</h1>
      <button onClick={connection}>연결</button>
    </>
  );
}
