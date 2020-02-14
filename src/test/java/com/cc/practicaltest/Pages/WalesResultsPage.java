package com.cc.practicaltest.Pages;


import com.cc.practicaltest.base.TestBase;
import org.junit.Assert;
import org.openqa.selenium.support.PageFactory;

public class WalesResultsPage extends TestBase {


    public WalesResultsPage(){
        PageFactory.initElements(driver, this);
    }

    public void validateResultChild()
    {
        Assert.assertEquals(driver.getTitle(),"Because you're under 16 you get help paying NHS costs");
    }
    public  void validateResultAdult()
    {
        Assert.assertEquals(driver.getTitle(),"Because you get qualifying universal credit you get help paying NHS costs");
    }
}
