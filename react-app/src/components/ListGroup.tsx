import React from "react";  //this is equal to using <>

import { Fragment } from "react";  //this is equal to using <>
//fragment kina use garinxata vanda return ma hamile elements haru banaka xam... tara return garda ta euta chij matra return huney ho.... so fragment chai return vako bujam.... ra fragment vitra anya chij haru xan which are the part of fragment

function ListGroup() {

    var items = [
        "Nepal", "pakistan", "bangladesh", "china", "sri-lanka"
    ];



    // if (items.length != 0) {
    //     console.log("items found");
    //     //js ma chai class le kaam gardaina so we use className
    //     return (
    //         <>
    //             <h1>List </h1>
    //             <ul className="list-group">
    //                 {/* <li className="list-group-item">An item</li>
    //             <li className="list-group-item">A second item</li>
    //             <li className="list-group-item">A third item</li>
    //             <li className="list-group-item">A fourth item</li>
    //             <li className="list-group-item">And a fifth one</li> */}


    //                 {/* k raixa ta vanda jsx le chai for,while loop na bujdo raixa so we use map instead.. map ko ni loop jastai kaam ho */}
    //                 {items.map((item) => (
    //                     <li key={item}>{item}</li>))}
    //             </ul>
    //         </>
    //     )
    // }

    // else {

    //     return (
    //         <>
    //             <h1>List</h1>
    //             <p>Items not found</p>

    //         </>
    //     );
    // }


    //see whatever we wrote up there is very lengthy.. and header h1 jun xa thats repeating what we can do instead is use CONDITIONAL RENDERING


    const handleClick = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => { console.log(event.target) }

    let condition = items.length === 0 ? <p>No items found</p> : null;
    return (
        <>
            <h1>List</h1>

            <ul className="list-group">
                {items.map((item, index) => (
                    <li  className="list-group-item" key={index} onClick={handleClick}>{item}
                    </li>
                ))}
            </ul >
        </>
    );

}
export default ListGroup;