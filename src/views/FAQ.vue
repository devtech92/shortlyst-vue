<template>
  <main>
    <section class="faq-banner">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="faq-content text-center">
              <img src="@/assets/images/faq.png" />
              <h2>Find your answers</h2>
              <p>
                in our FAQ list or
                <router-link to="/cotact-us">Contact Us</router-link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="faq-content">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="accordion_container">
              <div class="faq-vector faq-vector1">
                <img src="@/assets/images/faq-vector.png" />
              </div>
              <div class="faq-vector faq-vector2">
                <img src="@/assets/images/faq-vector1.png" />
              </div>
              <div class="faq-vector faq-vector3">
                <img src="@/assets/images/faq-vector2.png" />
              </div>
              <div class="accordian-tabs">
                <div class="accordion_head">
                  <h5>
                    How does Shortlyst differ from other tools?<span
                      class="plusminus"
                      ><img src="@/assets/images/chevron_big_down.png"
                    /></span>
                  </h5>
                </div>
                <div class="accordion_body" style="display: none">
                  <p>
                    In Shortlyst we pride ourselves in being every recruiter’s
                    handy tool. We want you to hire the best team with the least
                    amount of effort required. Hence we do not hide any talents
                    from our database in your search results! We even help you
                    automate your efforts in building relationships with the
                    talents you want.
                  </p>
                </div>
              </div>
              <div class="accordian-tabs">
                <div class="accordion_head">
                  <h5>
                    What is a contact credit?<span class="plusminus"
                      ><img src="@/assets/images/chevron_big_down.png"
                    /></span>
                  </h5>
                </div>
                <div class="accordion_body" style="display: none">
                  <p>
                    A contact credit is used to reveal premium information such
                    as contact details of talent profiles. 1 contact credit = 1
                    profile contact reveal A credit will be deducted from your
                    quota each time you click on the hidden contact and it will
                    remain unlocked for future sessions.
                  </p>
                </div>
              </div>
              <div class="accordian-tabs">
                <div class="accordion_head">
                  <h5>
                    What are the differences between plans?<span
                      class="plusminus"
                      ><img src="@/assets/images/chevron_big_down.png"
                    /></span>
                  </h5>
                </div>
                <div class="accordion_body" style="display: none">
                  <p>
                    Each pricing plan offers a different number of features and
                    contact credits tailored to different needs. For further
                    explanation on the difference, please refer to the pricing
                    above to see what features and contact credits are provided
                    for different packages.
                  </p>
                </div>
              </div>
              <div class="accordian-tabs">
                <div class="accordion_head">
                  <h5>
                    Will my plan renew automatically?<span class="plusminus"
                      ><img src="@/assets/images/chevron_big_down.png"
                    /></span>
                  </h5>
                </div>
                <div class="accordion_body" style="display: none">
                  <p>
                    Your plan renews automatically based on your billing plan
                    (monthly or annually). Your monthly or annual contact
                    credits will also be issued automatically.
                  </p>
                </div>
              </div>
              <div class="accordian-tabs">
                <div class="accordion_head">
                  <h5>
                    What happens to unused contact credits?<span
                      class="plusminus"
                      ><img src="@/assets/images/chevron_big_down.png"
                    /></span>
                  </h5>
                </div>
                <div class="accordion_body" style="display: none">
                  <p>
                    Any credits obtained through our subscription plan does not
                    roll over to the next month. Additional purchase of credits
                    will roll over to the next month and you will be able to use
                    it for up to 90 days. We always deplete credits from your
                    subscription plan first before deducting from your purchased
                    credits.
                  </p>
                </div>
              </div>
              <div class="accordian-tabs">
                <div class="accordion_head">
                  <h5>
                    Can I cancel my subscription?<span class="plusminus"
                      ><img src="@/assets/images/chevron_big_down.png"
                    /></span>
                  </h5>
                </div>
                <div class="accordion_body" style="display: none">
                  <p>
                    For Shortlyst Pro accounts:<br />
                    You can cancel your subscription at any time. To cancel, go
                    to Settings and then to the Subscription page. To upgrade to
                    Shortlyst Enterprise, please Contact Sales. *links to
                    Landing-Page-Request Demo-2*
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>


<script>
// @ is an alias to /src

import DefaultLayout from "@/components/layouts/DefaultLayout.vue";

export default {
  name: "FAQ",
  components: {
    // ,
  },
  created() {
    this.$emit(`update:layout`, DefaultLayout);
  },
  mounted() {
    // 
  },
};
</script>

<style scoped>
.faq-banner {
  padding-top: 100px;
}
</style>
