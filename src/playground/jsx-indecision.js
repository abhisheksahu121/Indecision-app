console.log("App is running");

// JSX - javascript XML it stand for javascript so this is bassically a language extention to allow us to extend the language and that is exactly what JSX is

//now we are going to rendered our little paragraph template down below by using one of the vairable
const app = {

    title: 'Indecision app',
    subtitle: 'Put your life in the hand of a computer',
    options: [],
};
//in below arrow function we have to passe an event object(e) 
//if you set up events and there you are going to get that object back which containes various information about the events and for forms.

// and also onFormSubmit function we have to use built in preventDefault function 
//so when the preventDefault function is called, is going to stop full page refrence and its going to allow us to instead just run some code right here handle the events

//after this we use target inbuilt which is going to point to the element that the event started on
//so in our case the event was the form and access all the elements which are indexing by name(option) and after that we are just going to value to get that value
const onFormSubmit = (e) => { 
    e.preventDefault();  

    const option = e.target.elements.option.value; //so here option is basaclly a string

    if(option) {
        app.options.push(option);
        e.target.elements.option.value = '';  //this use for empty a reading text
        render();
    }

};
const appRoot = document.getElementById('app');

 const removeAll = () => {
         app.options = [];  //so in this line the new empty array is generated
         render();
 }

 const onMakeDecision = () => {
     const randomnum = Math.floor(Math.random() * app.options.length);  //soo here Math.render() is return a random number but that number is between 0 to 1 where number could be 0 but could not be 1
                                                                        //soo here we use another method Math.floor() which is going to round the value in decimal like 1,2,...
     const option = app.options[randomnum];                            //use rendom number to pull somthing from the option array and now we are going to pull that item out and do somthing with it 
     alert(option);
 } 

//const numbers = [55, 101, 1000];

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? "here are your option" : 'No option'}</p>

            {/* //so here we use desabled event to disabl a button */}

            <button disabled={app.options.length === 0} onClick = {onMakeDecision}>What should i do?</button>     
            <button onClick = {removeAll}>Remove All</button>
            
            {/* {
                [<p key='1'>a</p>, <p key='2'>b</p>,<p key='3'>c</p>]       //so in jsx we can define array with the key. so the key is uniqly define each indevisual element in an array
            } */}
            {/* {
                numbers.map((number) => {
                    return <p key = {number}>Number: {number}</p>

                })
            } */}


            <ol>
                {
               app.options.map((option) => <li key ={option}>{option}</li>)
            }
            </ol>   {/* this syntex is use inorder to list the item. */}
            <form onSubmit = {onFormSubmit}>
                <input type = 'text' name="option"></input>
                <button>Add button</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
}
render();
removeAll();




