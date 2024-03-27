import React from 'react';

function Articles(props) {
    let firstArticle ='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis dolor incidunt provident aspernatur error doloribus ullam cumque illum necessitatibus magnam delectus hic unde, quaerat explicabo accusantium earum rerum perspiciatis ipsa.';
    let secondArticle ='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis dolor incidunt provident aspernatur error doloribus ullam cumque illum necessitatibus magnam delectus hic unde, quaerat explicabo accusantium earum rerum perspiciatis ipsa.';
    return (
        <div>
            <p>
                {firstArticle}
            </p>
            <p>
                {secondArticle}
            </p>
            <p>
                Content 3
            </p>
        </div>
    );
}

export default Articles;