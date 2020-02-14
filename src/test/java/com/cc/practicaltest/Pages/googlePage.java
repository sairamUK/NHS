package com.cc.practicaltest.Pages;

import com.cc.practicaltest.base.TestBase;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

public class googlePage extends TestBase {

    @FindBy(how = How.NAME, using = "q")
    public WebElement googlSearch;


    public googlePage() {
        PageFactory.initElements(driver, this);
    }


    public String validateLoginPageTitle() {
        return driver.getTitle();
    }
}
