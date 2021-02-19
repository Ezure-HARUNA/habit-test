import React from 'react';
import { useForm } from "react-hook-form";
import { TextField, Button } from '@material-ui/core'
// import Calendar from './Calendar'
 
const Form = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  
  return(
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="habit"
          fullWidth
          name="example1"
          inputRef={register({
            required: "入力してください！"
          })}
          error={Boolean(errors.example1)}
          helperText={errors.example1 && errors.example1.message}
        />
        <Button type="submit" variant="contained" color="primary">
          追加
        </Button>
        {/* <Calendar/> */}
      </form>
    </div>
    
  );
}
 
export default Form;