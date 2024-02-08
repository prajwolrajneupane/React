//we are using typescript.... typescript ma js ma chalney sabai chalxa plus additional kura haru pani


//whenever we create function first one is capital
function Message() {
    const name = "prajwol";

    // javascript:
    // let xyz = document.createElement('h1');
    // xyz.textContent = "hello" + { name };
    //textContent ra innerHTML ko vinnata chai textcontent le text matra dekhauxa vaney innerhtml le euta html vitra use vako tags pani dekhauxa.
    // return xyz;

    // Javascript xml(jsx):
    // jsx allows us to write js mei code like if we were writing in html

    return <h1> Hello {name}</h1>

    //yo mathi ko <h1> Hello {name}</h1> jun xa yo jsx ho... jsx(js xml) le chai k garxa ta vanda it allows us to write or create components in js like in html.... yo code js ma garda we would have to do let xyz=document.createElement(h1);xyz.innerhtml=hello {name};
    // browser le bujda xml lai js mei bujney ho.... tyo translate garney chai babel vanney compiler le garxa we use render() to do that
    


}



export default Message;
