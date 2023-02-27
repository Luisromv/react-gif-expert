import { useState } from 'react';
import { AddCategory, GifGrid } from './components';
import PropTypes from 'prop-types';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Piece']);

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories]);
    }
    
    return (
        <>
            <div>GifExpertApp</div>

            <AddCategory onNewCategory={onAddCategory} />

            {
                categories.map(category => (
                    <GifGrid key={category} category={category} />
                ))
            }

        </>
    )
}

GifExpertApp.propTypes = {
    onAddCategory: PropTypes.string.isRequired,
    newCategory: PropTypes.string.isRequired,
}
