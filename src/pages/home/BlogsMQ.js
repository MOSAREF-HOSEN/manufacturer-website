import React from 'react';

const BlogsMQ = () => {
    return (

        <div className='grid grid-cols-1 gap-16 p-12'>
            <div>
                <h2 className='text-xl mb-6'>1. how to parfomenc work react application</h2>
                <p>the component changes, React recreates the virtual DOM tree and compares the result with the previous render.

                    It then only updates the changed element in the actual DOM. This process is called diffing.

                    React uses the concept of a virtual DOM to minimize the performance cost of re-rendering a webpage because the actual DOM is expensive to manipulate.

                    This is great because it speeds up the UI render time. However, this concept can also slow down a complex app if its not managed very well.</p>
            </div>
            <div>
                <h2 className='text-xl mb-6'>1. how to parfomenc work react application</h2>
                <p>JavaScript objects are dynamic "bags" of properties (referred to as own properties). JavaScript objects have a link to a prototype object. When trying to access a property of an object, the property will not only be sought on the object but on the prototype of the object, the prototype of the prototype, and so on until either a property with a matching name is found or the end of the prototype chain is reached.</p>
            </div>
           
            <div>
                <h2 className='text-xl mb-6'>1. how to parfomenc work react application</h2>
                <p>the component changes, React recreates the virtual DOM tree and compares the result with the previous render.

                    It then only updates the changed element in the actual DOM. This process is called diffing.

                    React uses the concept of a virtual DOM to minimize the performance cost of re-rendering a webpage because the actual DOM is expensive to manipulate.

                    This is great because it speeds up the UI render time. However, this concept can also slow down a complex app if its not managed very well.</p>
            </div>
        </div>

    );
};

export default BlogsMQ;