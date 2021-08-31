import React, { Fragment } from 'react'
import { ParametersSectionContainer, ParametersSectionContent, ParametersTable, ParametersTableElement, ParametersTitle } from './ProductParameters.style'

const ProductParameters = () => {
    return (
        <Fragment>
            <ParametersSectionContainer>
                <ParametersSectionContent>
                    <ParametersTitle>
                        Dane techniczne
                    </ParametersTitle>

                    <ParametersTable>
                        <ParametersTableElement>
                            Wysokość: 60cm
                        </ParametersTableElement>
                        <ParametersTableElement>
                            Szerokość: 60cm
                        </ParametersTableElement>
                        <ParametersTableElement>
                            Głębokość: 55cm
                        </ParametersTableElement>
                        <ParametersTableElement>
                            Kolor: Czarny matowy
                        </ParametersTableElement>
                        <ParametersTableElement>
                            Klasa energetyczna: A+
                        </ParametersTableElement>
                        <ParametersTableElement>
                            Pojemność: 60l
                        </ParametersTableElement>
                        <ParametersTableElement>
                            Moc całkowita: 3kW
                        </ParametersTableElement>
                        <ParametersTableElement>
                            Grzałka Górna: 900W
                        </ParametersTableElement>
                        <ParametersTableElement>
                            Grzałka dolna: 1100W
                        </ParametersTableElement>
                        <ParametersTableElement>
                            Grill elektryczny: 1500W
                        </ParametersTableElement>
                    </ParametersTable>
                </ParametersSectionContent>
            </ParametersSectionContainer>

            <ParametersSectionContainer>
                <ParametersSectionContent>
                    <ParametersTitle>
                        Funkcjonalność
                    </ParametersTitle>

                    <ParametersTable>
                        <ParametersTableElement>
                            Rodzaj piekarnika: elektryczny
                        </ParametersTableElement>
                        <ParametersTableElement>
                            Liczba funkcji piekarnika: 11
                        </ParametersTableElement>
                        <ParametersTableElement>
                            Liczba gotowych programów: 25
                        </ParametersTableElement>
                        <ParametersTableElement>
                            Nagrzew w: 5 min.
                        </ParametersTableElement>
                        <ParametersTableElement>
                            Równomierne pieczenie na kilku poziomach
                        </ParametersTableElement>
                        <ParametersTableElement>
                            Liczba programów użytkownika: 10
                        </ParametersTableElement>
                    </ParametersTable>
                </ParametersSectionContent>
            </ParametersSectionContainer>

            <ParametersSectionContainer style={{
                    borderBottom: "none",
                }}>
                <ParametersSectionContent>
                    <ParametersTitle>
                        Wyposażenie
                    </ParametersTitle>

                    <ParametersTable>
                        <ParametersTableElement>
                            Wyświetlacz graficzny z asystentem gotowania
                        </ParametersTableElement>
                        <ParametersTableElement>
                            Sterowanie sensorowe i smartfonem
                        </ParametersTableElement>
                        <ParametersTableElement>
                            Drabinki boczne
                        </ParametersTableElement>
                        <ParametersTableElement>
                            Łatwy demontaż drzwi
                        </ParametersTableElement>
                        <ParametersTableElement>
                            Termosonda
                        </ParametersTableElement>
                        <ParametersTableElement>
                            Emalia łatwoczyszcząca
                        </ParametersTableElement>
                        <ParametersTableElement>
                            Szyba przyciemniana
                        </ParametersTableElement>
                        <ParametersTableElement>
                            Zimny front 
                        </ParametersTableElement>
                        <ParametersTableElement>
                            Szyba refleksyjna
                        </ParametersTableElement>
                        <ParametersTableElement>
                            Podświetlany uchwyt
                        </ParametersTableElement>
                        <ParametersTableElement>
                            Drabinka suszarnicza
                        </ParametersTableElement>
                        <ParametersTableElement>
                            WiFi - sterowanie smartfonem
                        </ParametersTableElement>
                        <ParametersTableElement>
                            Zdalne sterowanie
                        </ParametersTableElement>
                        <ParametersTableElement>
                            Zamknięta górna listwa drzwi
                        </ParametersTableElement>
                        <ParametersTableElement>
                            Podwójne oświetlenie halogenowe boczne
                        </ParametersTableElement>
                        <ParametersTableElement>
                            Blokada programatora
                        </ParametersTableElement>
                        <ParametersTableElement>
                            Przepisy na drzwiach
                        </ParametersTableElement>
                        <ParametersTableElement>
                            Szeroki zakres temperatur: 30°C - 280°C 
                        </ParametersTableElement>
                    </ParametersTable>
                </ParametersSectionContent>
            </ParametersSectionContainer>
        </Fragment>
    )
}

export default ProductParameters
