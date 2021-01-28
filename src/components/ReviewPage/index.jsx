import React from 'react';
import { Formik } from 'formik';
import ReviewForm from './ReviewForm';
import * as yup from 'yup';
import useAddReview from '../../hooks/useAddReview';
import { useHistory } from 'react-router-native';

const validationSchema = yup.object().shape({
    repositoryName: yup
        .string()
        .lowercase()
        .required('Repository name is required'),
    ownerName: yup
        .string()
        .lowercase()
        .required('Repository owner name is required'),
    rating: yup
        .number()
        .integer('Rating must be an integer')
        .min(0, 'Rating must not be lower than 0')
        .max(100, 'Rating must not be higher than 100')
        .required('Rating is required'),
    text: yup
        .string()
        .max(2000),
});

const ReviewPage = () => {
    let history = useHistory();
    const [addReview] = useAddReview();// make this

    const onSubmit = async (values) => {
        const { repositoryName, ownerName, rating, text } = values;
    
        try {
            const { createReview } = await addReview({ repositoryName, ownerName, rating, text });
            history.push(`/${createReview.repositoryId}`); //link to single repository you reviewed?
        } catch (e) {
            console.log(e);
        }
    };
    const initialValues = {
        repositoryName: '',
        ownerName: '',
        rating: '',
        text: '',
    };
    return (
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            {({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit} />}
        </Formik>
    );
};

export default ReviewPage;