import React, { useState, useEffect } from 'react';
import Image from '../HealthCareDashboard/TestLogo.png'
import testLogo from '../HealthCareDashboard/home_FILL0_wght300_GRAD0_opsz24@2x.png'
import groupPeople from '../HealthCareDashboard/group_FILL0_wght300_GRAD0_opsz24.svg'
import schedule from '../HealthCareDashboard/calendar_today_FILL0_wght300_GRAD0_opsz24.svg'
import schedule2 from '../HealthCareDashboard/chat_bubble_FILL0_wght300_GRAD0_opsz24.svg'
import transaction from '../HealthCareDashboard/credit_card_FILL0_wght300_GRAD0_opsz24.svg'
import settings from '../HealthCareDashboard/settings_FILL0_wght300_GRAD0_opsz24.svg'
import more from '../HealthCareDashboard/more_horiz_FILL0_wght300_GRAD0_opsz24.svg'
import icon from '../HealthCareDashboard/FemaleIcon.svg'
import Phone from '../HealthCareDashboard/PhoneIcon.svg'
import birth from '../HealthCareDashboard/BirthIcon.svg'
import isuranceIcon from '../HealthCareDashboard/InsuranceIcon.svg'
import seinorWoman from '../HealthCareDashboard/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png'
import BloodPressureChart from './landing';
import { FaSpinner } from "react-icons/fa";
import Latest from './latest';
import Result from './labResult';



export function LandingPage() {
  const [data, setData] = useState([])


  useEffect(() => {
    const url = 'https://fedskillstest.coalitiontechnologies.workers.dev';
    const username = 'yourUsername';
    const password = 'yourPassword';

    const headers = new Headers();
    headers.set('Authorization', 'Basic ' + btoa(`${'coalition'}:${'skills-test'}`));

    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: headers
        });

        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }

        const result = await response.json(); // or response.text() if not JSON
        setData(result)
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  console.log(data)


  return (
    <>
      <div className='flex-1' style={{
        backgroundColor: "#F6F7F8"
      }}>
        {/* here is the header  */}
        <div className='flex flex-row items-baseline justify-between overflow-x-hidden h-fit bg-white rounded-lg p-1 ' >
          <div className='w-fit'>
            <img height={150} width={150} src={Image} />
          </div>

          <div className='flex flex-row items-center '>
            <div className='flex flex-row items-center p-3 '>
              <img className='h-4 pr-1' src={testLogo} />
              <a className='text-sm p-1' href=''>
                Overview
              </a>
            </div>
            <div
              style={{
                backgroundColor: "#01F0D0",
                borderRadius: 50,
                paddingTop: 2,
                paddingBottom: 2,

              }}
              className='flex flex-row items-center p-3'>
              <img className='h-4 pr-1' src={groupPeople} />
              <a className='text-sm p-1' href=''>
                Patients
              </a>
            </div>
            <div className='flex flex-row items-center p-3'>
              <img className='h-4 pr-1' src={schedule} />
              <a className='text-sm p-1' href=''>
                Schedule
              </a>
            </div>

            <div className='flex flex-row items-center p-3'>
              <img className='h-4 pr-1' src={schedule2} />
              <a className='text-sm p-1' href=''>
                Message
              </a>
            </div>

            <div className='flex flex-row items-center p-3'>
              <img className='h-4 pr-1' src={transaction} />
              <a className='text-sm p-1' href=''>

                Transaction
              </a>
            </div>
          </div>


          <div className='flex flex-row items-center'>
            <div className='flex flex-row items-center'>
              <img className='h-8 pr-2' src={seinorWoman} />
              <span>
                <h4 className='text-black m-0 p-0'>Dr. Jose simmons</h4>
                <h6 style={{
                  fontSize: 13
                }} className='text-gray-500  m-0 p-0'>General practicational</h6>
              </span>
            </div>
            <div style={{
              display: 'flex',
              flexDirection: "row",

            }} className="pl-6">
              <img className='h-4 pr-1' src={settings} />
              <img className='rotate-90 h-1 pr-1 mt-2' src={more} />
            </div>
          </div>
        </div>
        {/* OverAll Wrapper */}
        {data.length > 0 ? (
          <div className='flex flex-row justify-around p-2 m-2'>
            {/* controlling chat.js */}
            <div style={{
              width: 220,
              padding: 2,
              margin: 2
            }} className="bg-white rounded-lg ">
              <div className='max-h-screen overflow-scroll overflow-y-scroll' >
                {data.map((item, index) => (
                  <div className='flex flex-row items-center justify-around'>
                    <div className='flex flex-row items-center p-2 m-3'>
                      <img className='h-7 w-7' src={item.profile_picture} />
                      <span className='ml-2'>
                        <h3 className='text-sm '>{item.name}</h3>
                        <h6 style={{
                          fontSize: 13
                        }} className='text-gray-500'>{item.gender}, {item.age}</h6>
                      </span>
                    </div>
                    <div>
                      <img src={more} />
                    </div>
                  </div>
                ))}
              </div>
            </div>


            {/* secound data here */}
            <div>
              <div style={{

              }} className="p-2 bg-white  h-fit w-fit rounded-lg m-2" >
                {data.length > 0 && <BloodPressureChart diagnosisHistory={data[0]?.diagnosis_history} />}
              </div>
              <div className="p-2 bg-white  h-fit w-fit rounded-lg m-2">
                <Latest diagnosisHistory={data[0]?.diagnostic_list} />
              </div>
            </div>
            {/* third here */}

            <div className='p-2 rounded-lg m'>
              <div className='bg-white rounded-lg h-fit p-3'>
                <div>
                  <center>
                    <img className='h-28 w-28' src={data[0]?.profile_picture} alt="Profile" />
                    <h3 style={{
                      fontSize: 15,
                    }} className='text-black p-2 font-semibold '>{data[0]?.name}</h3>
                  </center>

                  <div className='flex flex-row items-center justify-left pb-3'>
                    <div>
                      <img className='text-sm ' src={birth} />
                    </div>

                    <div>
                      <h5 style={{
                        fontSize: 12,
                      }} className=''>Date of birth</h5>
                      <h6 style={{
                        fontSize: 14,
                      }} className="font-semibold text-sm">{data[0]?.date_of_birth}</h6>
                    </div>
                  </div>
                  <div className='flex flex-row items-center justify-left pb-3'>
                    <div>
                      <img src={icon} />
                    </div>
                    <div>
                      <h5 style={{
                        fontSize: 12,
                      }}>Gender</h5>
                      <h5 style={{
                        fontSize: 14,
                      }} className="font-semibold text-sm">{data[0]?.gender}</h5>
                    </div>
                  </div>
                  <div className='flex flex-row pb-3'>
                    <img src={Phone} />
                    <div>
                      <h5 style={{
                        fontSize: 12,
                      }}>Contact info</h5>
                      <h5 style={{
                        fontSize: 14,
                      }} className="font-semibold text-sm">{data[0]?.phone_number}</h5>
                    </div>
                  </div>
                  <div className='flex flex-row pb-3' >
                    <div>
                      <img src={Phone} />
                    </div>
                    <div>
                      <h5
                        style={{
                          fontSize: 12,
                        }}
                      > Emergency Contact</h5>

                      <h5 style={{
                        fontSize: 14,
                      }} className='font-semibold text-sm'>{data[0]?.emergency_contact}</h5>
                    </div>
                  </div>

                  <div className='flex flex-row pb-3' >
                    <div>
                      <img src={isuranceIcon} />
                    </div>
                    <span>
                      <h5 style={{
                        fontSize: 12,
                      }}>Insurance Type</h5>
                      <h5 style={{
                        fontSize: 14,
                      }} className="font-semibold text-sm">{data[0]?.insurance_type}</h5>
                    </span>

                  </div>

                  <div

                    style={{
                      backgroundColor: "#01F0D0",
                      borderRadius: 50,
                      paddingTop: 2,
                      paddingBottom: 2,

                    }}
                    className='text-center p-3'>

                    <a className='text-sm p-1 ' href=''>
                      Show all Information
                    </a>
                  </div>
                </div>


              </div>
              <div>
                <Result diagnosisHistory={data[0]?.lab_results} />
              </div>
            </div>

          </div>
        )
          :
          <div className='justify-center text-center'>
            <center>
              <FaSpinner className='animate-spin text-4xl text-green-500' />
            </center>
          </div>
        }
      </div>
    </>
  );
}
