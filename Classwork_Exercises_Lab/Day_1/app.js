console.log('Message to developer');
function AlertMsg(){
    const Hi= ()=>{alert("Message from Javascript Alert!")}
    return <div><h2>Let we see the output of JAVASCRIPT</h2><button onClick={Hi}>Click here</button></div>
}
ReactDOM.render(<AlertMsg/>, document.getElementById('mydiv1'));

// function AlertMsg(){
//     console.log('Message to developer');
//     alert("Message from Javascript Alert!");
// }