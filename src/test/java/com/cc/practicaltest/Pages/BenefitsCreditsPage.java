package com.cc.practicaltest.Pages;

import com.cc.practicaltest.base.TestBase;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

public class BenefitsCreditsPage extends TestBase {

    @FindBy(how= How.ID,using="next-button")
    public WebElement Next;


    @FindBy(how= How.ID,using="label-yes")
    public WebElement YesButton;
   public BenefitsCreditsPage(){
       PageFactory.initElements(driver, this);
   }

    public void claimBenifitsAndTax(){
        YesButton.click();
    }

    public void Start()
    {
        Next.submit();

    }

}
