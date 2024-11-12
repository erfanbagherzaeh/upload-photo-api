import React, { useState } from 'react';
import './BoxLeft.css'; // به فایل CSS متصل می‌شویم
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';


const Form = () => {
  // state برای نگهداری مقادیر ورودی
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [autocompleteValue, setAutocompleteValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // ارسال داده‌ها یا عملیات دلخواه
    console.log({ title, description, autocompleteValue });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        {/* فیلد عنوان */}
        <div className="form-group">
          
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="عنوان را وارد کنید"
            required
            className='font'
          />
        </div>



        {/* فیلد autocomplete */}
        <div className="form-group" >
          <input
            type="text"
            id="autocomplete"
            value={autocompleteValue}
            onChange={(e) => setAutocompleteValue(e.target.value)}
            list="autocomplete-suggestions"
            placeholder="انتخاب کنید"
            required
            
          />
          <datalist id="autocomplete-suggestions"  >
          
                    <option value="طبیعت "  />
                    <option value="چشم انداز ها و مناظر  "/>
                    <option value="حیات وحش"/>
                    <option value="معماری"/>
                    <option value="هوایی"/>
                    <option value="اشیا و طبیعت بی جان"/>
                    <option value="نجومی " />
                    <option value=" شب  "/>
                    <option value="  سیاه و سفید"/>
                    <option value="پرتره"/>
                    <option value="ماکرو"/>
                    <option value="خبری و ورزشی و مستند"/>

          </datalist>

        </div>



        {/* فیلد توضیحات */}
        <div className="form-group ">
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="توضیحات را وارد کنید"
            required
         
            style={{height:'100px'}}

          ></textarea>
        </div>
        {/* دکمه ارسال */}
        <Button variant="contained"   disableElevation style={{ fontFamily: 'sahelFont' ,  backgroundColor:'gray' }}>
     <SaveIcon/>  ثبت عکس 
    </Button>
      </form>
    </div>
  );
};

export default Form;
