package cuciMobil.registrarEntrada
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
import cucumber.api.java.en.But


class registrarEntrada {

	@Given("la placa: (.*), registro un vehiculo")
	def registrar_entrada_sin_usuario(String placa) {

		WebUI.setText(findTestObject('Object Repository/registrarEntrada/input_placa'),placa)
		WebUI.click(findTestObject('Object Repository/registrarEntrada/mat-select_tipoVehiculo'))
		WebUI.click(findTestObject('Object Repository/registrarEntrada/span_tipoVehiculoAutomovil'))
		WebUI.click(findTestObject('Object Repository/registrarEntrada/button_asignarServicio'))
	}

	@And("verifico que si haya registrado el vehiculo con placa: (.*)")
	def verificar(String placa){
		WebUI.delay(3)
		assert WebUI.verifyElementPresent(findTestObject('Object Repository/registrarEntrada/h2_placa',['placa' : placa]),0)
	}

	@Given("la placa: (.*), el documento: (.*) y el tipo de vehiculo: (.*), registro un vehiculo y un cliente")
	def registrar_entrada_con_usuario(String placa, String documento, String tipoVehiculo) {

		WebUI.setText(findTestObject('Object Repository/registrarEntrada/input_placa'),placa)

		if(tipoVehiculo.equals("Automovil")){

			WebUI.click(findTestObject('Object Repository/registrarEntrada/mat-select_tipoVehiculo'))
			WebUI.click(findTestObject('Object Repository/registrarEntrada/span_tipoVehiculoAutomovil'))
		}else{

			WebUI.click(findTestObject('Object Repository/registrarEntrada/mat-select_tipoVehiculo'))
			WebUI.click(findTestObject('Object Repository/registrarEntrada/span_tipoVehiculoMoto'))
		}

		WebUI.setText(findTestObject('Object Repository/registrarEntrada/input_documento'),documento)
		WebUI.click(findTestObject('Object Repository/registrarEntrada/input_registroCliente'))
		WebUI.setText(findTestObject('Object Repository/registrarEntrada/input_nombre'),"juanito")
		WebUI.setText(findTestObject('Object Repository/registrarEntrada/input_apellidos'),"perez")
		WebUI.setText(findTestObject('Object Repository/registrarEntrada/input_telefono'),"18753971")

		WebUI.click(findTestObject('Object Repository/registrarEntrada/button_asignarServicio'))
	}
}