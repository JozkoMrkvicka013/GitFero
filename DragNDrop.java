import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public class DragNDrop {

	public static void main(String[] args) throws InterruptedException {

		System.setProperty("webdriver.chrome.driver",
				"C:\\Users\\Daniel\\Downloads\\selenium\\selenium-java-3.141.59\\libs\\driver chrome\\chromedriver_win32\\chromedriver (2).exe");
		
		WebDriver driver = new ChromeDriver();
		Actions action = new Actions(driver);
		driver.get("http://www.uitestpractice.com/");
		driver.manage().window().maximize();
		
		WebDriverWait wait = new WebDriverWait(driver, 5);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("draggable")));
		
		WebElement from = driver.findElement(By.id("draggable"));
		WebElement to = driver.findElement(By.id("droppable"));
		action.dragAndDrop(from, to).build().perform();
		
		
		
		//action.
		
		Thread.sleep(5000);
		 
		//action.moveToElement().
		
		driver.quit();
		
	}

}
