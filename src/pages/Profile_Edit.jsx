import React from 'react';
import { GridComponent, Inject, ColumnsDirective, ColumnDirective, Search, Page } from '@syncfusion/ej2-react-grids';


import { Header } from '../components';
import profilePicture from '../data/avatar.jpg'

const Profile_Edit = () => {
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
      <input type="email" id="email" class="bg-gray-50 border mx-auto mt-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-48 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Omar" required=""/>
      </label>
      </div>

      <div className='flex flex-col py-2'>
      <label className='mt-1 text-2xl font-bold'>Last Name: 
      <input type="email" id="email" class="bg-gray-50 border mx-auto mt-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-48 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="09932521" required=""/>
      </label>
      </div>
      
      </div>


      <div className='flex flex-col py-2'>
          <label className='text-2xl font-bold'>Employee ID: </label>
        <input type="email" id="email" class="bg-gray-50 border mx-auto mt-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-48 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="09932521" required=""/>
      </div>

      <div className='flex flex-col py-2'>
          <label className='text-2xl font-bold'>Role: </label>
          <label className='text-xl font-medium'>Employee</label>
      </div>

      <div className='flex flex-col py-2'>
          <label className='text-2xl font-bold'>Email Address:
          <input type="email" id="email" class="bg-gray-50 border mx-auto mt-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-48 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@gmail.com" required=""/>
      </label>
      </div>

      <div className='flex flex-col py-2'>vs
          <label className='text-2xl font-bold'>Phone Number: <input type="email" id="email" class="bg-gray-50 border mx-auto mt-2 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-48 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="09123456789" required=""/>
      </label>
      </div>

      <button className='w-40 py-2 my-5 bg-yellow-500'>Confirm</button>
      <button className='w-40 py-2 my-5 ml-3 bg-gray-500'>Cancel</button>
      </div>
      </div>

  );
};
export default Profile_Edit;
