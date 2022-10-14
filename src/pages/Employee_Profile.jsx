import React from 'react';
import { GridComponent, Inject, ColumnsDirective, ColumnDirective, Search, Page } from '@syncfusion/ej2-react-grids';


import { Header } from '../components';
import profilePicture from '../data/avatar.jpg'
import Profile_Edit from './Profile_Edit';

const Employee_Profile = () => {
  const toolbarOptions = ['Search'];

  const editing = { allowDeleting: true, allowEditing: true };

  return (
    
    <div className="p-2 m-2 mt-24 bg-white md:m-10 md:p-10 rounded-3xl">
      <Header category="Employee Profile" title="Profile" />
      <div className='p-4 text-center profile_img'>
      
      <div className='div'>
      <img src={profilePicture}  alt="" class="mx-auto"/>
      

      <div className='flex flex-col py-2'>
      <label className='mt-5 text-2xl font-bold'>First Name: 
      <h1 className='text-2xl font-semibold'>Omar</h1>
      </label>
      </div>

      <div className='flex flex-col py-2'>
      <label className='mt-1 text-2xl font-bold'>Last Name: 
      <h1 className='text-2xl font-semibold'>Darobe</h1>
      </label>
      </div>


      <div className='flex flex-col py-2'>
          <label className='text-2xl font-bold'>Employee ID: </label>
          <label className='text-xl font-medium'>09932521</label>
      </div>

      <div className='flex flex-col py-2'>
          <label className='text-2xl font-bold'>Role: </label>
          <label className='text-xl font-medium'>Employee</label>
      </div>

      <div className='flex flex-col py-2'>
          <label className='text-2xl font-bold'>Email Address: </label>
          <label className='text-xl font-medium'>adcve@gmail.com</label>
      </div>

      <div className='flex flex-col py-2'>
          <label className='text-2xl font-bold'>Phone Number: </label>
          <label className='text-xl font-medium'>09123456789</label>
      </div>

      <button type="submit" href={Profile_Edit} className='w-40 py-2 my-5 bg-yellow-500 hover:bg-yellow-600 hover:shadow-lg'>Edit Profile</button>
      </div>
      </div>
    </div>
  );
};
export default Employee_Profile;
