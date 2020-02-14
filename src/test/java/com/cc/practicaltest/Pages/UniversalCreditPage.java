package com.cc.practicaltest.Pages;

import com.cc.practicaltest.base.TestBase;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

public class UniversalCreditPage extends TestBase {

    @FindBy(how= How.ID,using="next-button")
    public WebElement Next;


    @FindBy(how= How.ID,using="label-yes")
    public WebElement YesUniversalCredit;

    public UniversalCreditPage(){
        PageFactory.initElements(driver, this);
    }

    public void reciievesUniversalCredit(){
        YesUniversalCredit.click();
    }

    public void Start()
    {
        Next.submit();

    }


}
