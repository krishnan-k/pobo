import React from 'react'

const Breadcrumb = () => {
  return (
    <div className='breadcrumb_section bg-[#e2e8f0] pt-11 pb-12 max-[767px]:pt-8 max-[767px]:pb-9'>
      <h1 className='text-center text-[40px] font-semibold text-[#272b41] max-[767px]:text-[25px]'>Doctor Request</h1>
      <div className='redirect_page_link text-center'>
        <span className='link_1 capitalize text-[13px] text-[#4b5f95]'>home</span>
        <span className='icon pl-4 pr-4 text-[13px] text-[#4b5f95]'>/</span>
        <span className='link_2 capitalize text-[13px] text-[#272b41] font-medium'>doctor request</span>
      </div>
    </div>
    
  )
}

export default Breadcrumb
