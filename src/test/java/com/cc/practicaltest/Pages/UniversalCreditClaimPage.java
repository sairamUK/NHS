package com.cc.practicaltest.Pages;

import com.cc.practicaltest.base.TestBase;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

public class UniversalCreditClaimPage extends TestBase {



    @FindBy(how= How.XPATH,using="//fieldset[@id='paidUniversalCredit_fieldset']/label[1]")
    public WebElement YesClaim;


    @FindBy(how= How.ID,using="next-button")
    public WebElement Next;

    public UniversalCreditClaimPage(){{
        PageFactory.initElements(driver, this);
    }}

    public void YesClaim(){
        YesClaim.submit();

    }

    public void Start()
    {
        Next.submit();

    }


}

