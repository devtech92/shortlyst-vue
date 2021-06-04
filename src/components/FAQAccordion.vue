<template>
  <div>
    <div class="accordian-tabs">
      <accordion-item id="accordion-1">
        <template slot="title"
          >How does Shortlyst differ from other tools?</template
        >
        <template>
          <div>
            In Shortlyst we pride ourselves in being every recruiter’s handy
            tool. We want you to hire the best team with the least amount of
            effort required. Hence we do not hide any talents from our database
            in your search results! We even help you automate your efforts in
            building relationships with the talents you want.
          </div>
        </template>
      </accordion-item>
    </div>
    <div class="accordian-tabs">
      <accordion-item id="accordion-2">
        <template slot="title"
          >How do I manage my Account and Subscription?</template
        >
        <template>
          <p>For Shortlyst Pro accounts:</p>
          <p>
            You can go to Settings to manage your account and subscription. To
            upgrade to Shortlyst Enterprise, please
            <router-link to="/contact-sales">Contact Sales</router-link>
          </p>
          <p>For Shortlyst Enterprise accounts:</p>
          <p>
            To make changes to your account and subscription, please
            <router-link to="/contact-sales">Contact Sales</router-link>
          </p>
        </template>
      </accordion-item>
    </div>
    <div class="accordian-tabs">
      <accordion-item id="accordion-3">
        <template slot="title">
          How many profiles does Shortlyst have?
        </template>
        <template>
          <p>
            Shortlyst has aggregated 550M+ profiles globally from various online
            sources. Our team is committed to grow this number as we
            continuously update and aggregate from additional online sources
          </p>
        </template>
      </accordion-item>
    </div>
    <div class="accordian-tabs">
      <accordion-item id="accordion-4">
        <template slot="title">
          What are the main features on Shortlyst?
        </template>
        <template>
          <p>
            The following are the key features we would like to highlight from
            our product:
            <ul>
              <li>• AI talent recommendations</li>
              <li>• Automated reaching out</li>
              <li>• Collaboration features</li>
              <li>• Contact information reveal</li>
              <li>• Smart inbox</li>
            </ul>
          </p>
        </template>
      </accordion-item>
    </div>
    <div class="accordian-tabs">
      <accordion-item id="accordion-5">
        <template slot="title">
         Can I integrate with my Applicant Tracking System (ATS)?
        </template>
        <template>
          <p>
           With Shortlyst Enterprise plan, we provide the option for you to integrate with your ATS. For more information about integrations, please contact your dedicated account manager or Contact Us. 
          </p>
        </template>
      </accordion-item>
    </div>
     <div class="accordian-tabs">
      <accordion-item id="accordion-6">
        <template slot="title">
        How does Shortlyst protect users’ data?
        </template>
        <template>
          <p>
           Please refer to our detailed <router-link to='/privacy'>Privacy Policy</router-link> to address data protection and privacy.<br />For further details, you can contact your dedicated account manager or Contact Us
          </p>
        </template>
      </accordion-item>
    </div>
     <div class="accordian-tabs">
      <accordion-item id="accordion-7">
        <template slot="title">
       How can I get in touch?
        </template>
        <template>
          <p>
           For further inquiries, please feel free to leave us a message on our <router-link to="/contact-us">Contact Us</router-link> page or Request a <router-link to='/contact-us'>Demo</router-link>. Otherwise, you can email us at the address below: 
           <br />For Business/Partnerships related inquiries, please contact business@shortlyst.ai 
           <br/>For Support related inquiries, please contact support@shortlyst.ai
          </p>
        </template>
      </accordion-item>
    </div>
    
  </div>
</template>

<script>
import AccordionItem from "./AccordionItem.vue";
export default {
  components: { AccordionItem },
};
</script>

    
