package com.cc.practicaltest.Pages;

import com.cc.practicaltest.base.TestBase;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

public class UniversalCreditTakeHomePayPage extends TestBase {

    @FindBy(how= How.ID,using="next-button")
    public WebElement Next;


    @FindBy(how= How.XPATH,using="//fieldset[@id='paidUniversalCredit_fieldset']/label[1]")
    public WebElement Yes;
    public UniversalCreditTakeHomePayPage()
    { PageFactory.initElements(driver, this);
    }

    public void Yes(){
        Yes.click();

    }

    public void Start()
    {
        Next.submit();

    }

}
