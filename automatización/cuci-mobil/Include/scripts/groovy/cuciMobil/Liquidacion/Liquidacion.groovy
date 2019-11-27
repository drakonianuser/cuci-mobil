package cuciMobil.Liquidacion
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
import cucumber.api.java.en.When


class Liquidacion {
	/**
	 * The step definitions below match with Katalon sample Gherkin steps
	 */
	@Then("le doy a la opción terminar y despues a la opción liquidar")
	def generar_factura() {
		WebUI.click(findTestObject('Object Repository/liquidacion/button_terminarYLiquidar'))
		WebUI.acceptAlert()
		WebUI.click(findTestObject('Object Repository/turnos/tr_vehiculo'))
		WebUI.click(findTestObject('Object Repository/turnos/button_terminar_liquidar'))
		WebUI.click(findTestObject('Object Repository/liquidacion/button_terminarYLiquidar'))
		WebUI.acceptAlert()
	}

	@Then("verifico que la información este presente")
	def verificar_info(){
		assert WebUI.verifyElementPresent(findTestObject('Object Repository/liquidacion/td_cantidadServicios'),3)
		assert WebUI.verifyElementPresent(findTestObject('Object Repository/liquidacion/div_fechaEntrada'),3)
		assert WebUI.verifyElementPresent(findTestObject('Object Repository/liquidacion/div_placa'),3)
		assert WebUI.verifyElementPresent(findTestObject('Object Repository/liquidacion/div_tipoVehiculo'),3)
		assert WebUI.verifyElementPresent(findTestObject('Object Repository/liquidacion/div_turno'),3)
		assert WebUI.verifyElementPresent(findTestObject('Object Repository/liquidacion/td_servicio'),3)
	}
}