package cuciMobil.login
import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject

import com.kms.katalon.core.annotation.Keyword
import com.kms.katalon.core.checkpoint.Checkpoint
import com.kms.katalon.core.checkpoint.CheckpointFactory
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords
import com.kms.katalon.core.model.FailureHandling
import com.kms.katalon.core.testcase.TestCase
import com.kms.katalon.core.testcase.TestCaseFactory
import com.kms.katalon.core.testdata.TestData
import com.kms.katalon.core.testdata.TestDataFactory
import com.kms.katalon.core.testobject.ObjectRepository
import com.kms.katalon.core.testobject.TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords

import internal.GlobalVariable

import MobileBuiltInKeywords as Mobile
import WSBuiltInKeywords as WS
import WebUiBuiltInKeywords as WebUI

import org.openqa.selenium.WebElement
import org.openqa.selenium.WebDriver
import org.openqa.selenium.By

import com.kms.katalon.core.mobile.keyword.internal.MobileDriverFactory
import com.kms.katalon.core.webui.driver.DriverFactory

import com.kms.katalon.core.testobject.RequestObject
import com.kms.katalon.core.testobject.ResponseObject
import com.kms.katalon.core.testobject.ConditionType
import com.kms.katalon.core.testobject.TestObjectProperty

import com.kms.katalon.core.mobile.helper.MobileElementCommonHelper
import com.kms.katalon.core.util.KeywordUtil

import com.kms.katalon.core.webui.exception.WebElementNotFoundException

import cucumber.api.java.en.And
import cucumber.api.java.en.Given
import cucumber.api.java.en.Then
import cucumber.api.java.en.But
import cucumber.api.java.en.When


class LoginCorrecto {
	/**
	 * The step definitions below match with Katalon sample Gherkin steps
	 */
	@Given("un usuario: (.*) y una contraseña: (.*), ingreso al sistema")
	def ingreso_al_sistema(String usuario, String password) {
		WebUI.openBrowser(GlobalVariable.url)
		WebUI.maximizeWindow()

		WebUI.setText(findTestObject('Object Repository/login/input_usuario'), usuario)
		WebUI.setText(findTestObject('Object Repository/login/input_password'), password)
		WebUI.click(findTestObject('Object Repository/login/button_ingresar'))
	}

	@But('verifico que haya ingresado correctamente')
	def validacion_correcta(){
		WebUI.delay(2)
		assert WebUI.verifyElementPresent(findTestObject('Object Repository/login/h1_titulo'), 0)
	}
	@Then('verifico que salga el mensage de error')
	def validacion_incorrecta(){
		
		assert WebUI.verifyElementNotPresent(findTestObject('Object Repository/login/h1_titulo'), 0)
		
	}
}