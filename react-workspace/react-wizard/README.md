```ecmascript 6
 <WizardComponent titles={[
             {id:'basicInfo', title:'Basic Information'},
             {id:'contactInfo', title:'Contact Information'},
             {id:'jobPreference', title:'Job Preference'},
             {id:'review', title:'Thank you for your information'},
         ]}
 
          steps={[
              <BasicInfo titleId='basicInfo' id='basicInfo' />,
              <ContactInfoBasic titleId='contactInfo'  id='contactInfoBasic'/>,
              <ContactInfoAdvance titleId='contactInfo' id='contactInfoAdvance'/>,
              <JobPreference titleId='jobPreference' id='jobPreference'/>,
              <Review titleId='review' id='review'/>
          ]}
         />
```