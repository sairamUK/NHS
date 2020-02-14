package com.cc.practicaltest.Pages;

import com.cc.practicaltest.base.TestBase;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

public class LivingWithPartner extends TestBase {
    @FindBy(how= How.ID,using="label-no")
    public WebElement NoButton;

    @FindBy(how= How.ID,using="next-button")
    public WebElement Next;


    public LivingWithPartner(){
        PageFactory.initElements(driver, this);
    }
    public void liveWithPartner(){
       NoButton.click();
    }
    public void Submit(){ Next.submit();}

}
