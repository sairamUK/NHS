package com.cc.practicaltest.steps;



import com.cc.practicaltest.Pages.*;
import com.cc.practicaltest.base.TestBase;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.BeforeClass;

public class WalesFeatureSteps extends TestBase {
  LandingPage landingPage = new LandingPage();
  WhereYouLivePage whereYouLivePage = new WhereYouLivePage();
  DateOfBirthPage dateOfBirthPage = new DateOfBirthPage();
  WalesResultsPage walesResultsPage = new WalesResultsPage();
  LivingWithPartner livingWithPartner= new LivingWithPartner();
  BenefitsCreditsPage benefitsCreditsPage = new BenefitsCreditsPage();
  UniversalCreditPage universalCreditPage = new UniversalCreditPage();
  UniversalCreditClaimPage universalCreditClaimPage = new UniversalCreditClaimPage();
  UniversalCreditTakeHomePayPage universalCreditTakeHomePayPage = new UniversalCreditTakeHomePayPage();

    @BeforeClass
    public void setUp() throws InterruptedException {
      initialization();

    }

    @Given("the user is on landing page")
    public void the_user_is_on_landing_page() {
      landingPage.getLandingPage();
      landingPage.Start();

    }

    @When("the user is from Wales")
    public void the_user_is_from_Wales() {
      whereYouLivePage.SelectWales();
      whereYouLivePage.Submit();


    }

    @Given("the user is less than sixteen years of age {string} {string} {string}")
    public void the_user_is_less_than_years_of_age(Integer int1, String day, String month, String year) {
      dateOfBirthPage.EnterDatOfBirth(day,month,year);
      dateOfBirthPage.Submit();
    }

    @Then("the user should get free NHS help")
    public void the_user_should_get_free_NHS_help() {
      walesResultsPage.validateResultChild();


    }


  @When("the user is greater than sixteen years of age {string} {string} {string}")
  public void the_user_is_greater_than_sixteen_years_of_age(String day, String month, String year) {
    dateOfBirthPage.EnterDatOfBirth(day,month,year);
    dateOfBirthPage.Submit();
    }

  @Then("the user is not living with partner")
  public void the_user_is_not_living_with_partner() {
    livingWithPartner.liveWithPartner();
    livingWithPartner.Submit();

  }

  @Then("the user claims benifits and tax credits")
  public void the_user_claims_benifits_and_tax_credits() {
      benefitsCreditsPage.claimBenifitsAndTax();
      benefitsCreditsPage.Start();

  }

  @Then("the user recieves Universal Credit and have responsibilty of a child")
  public void the_user_recieves_Universal_Credit_and_have_responsibilty_of_a_child() {
      universalCreditPage.reciievesUniversalCredit();
      universalCreditPage.Start();
     universalCreditClaimPage.YesClaim();
      universalCreditClaimPage.Start();
  }

  @And("the take home pay from universal credit is less than ninefiftyfive")
  public void theTakeHomePayFromUniversalCreditIsLessThanNinefiftyfive() {
      universalCreditTakeHomePayPage.Yes();
      universalCreditTakeHomePayPage.Start();

  }

  @Then("the user should get free adult NHS help")
  public void theUserShouldGetFreeAdultNHSHelp() {
      walesResultsPage.validateResultAdult();
  }
}
