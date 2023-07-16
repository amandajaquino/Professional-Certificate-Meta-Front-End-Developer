import * as React from 'react';


//Parent comaponent
//the parent component can be the App component

function Dog() {
    return (
        <Puppy name="Max" bowlShape="square" bowlStatus="full" />
    );
}


//Child Component

function Puppy(props) {
    return (
        <div>
            {props.name} has <Bowl bowlShape="square" bowlStatus="full" />
        </div>
    );
};



//Grandchild component:


function Bowl(props) {
    return (
        <span>
            {props.bowlShape}-shaped bowl, and it's currently {props.bowlStatus}
        </span>
    );
};
