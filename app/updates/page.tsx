import React from 'react'

export default function updates() {
    return (
        <div className="flex mt-12 justify-center items-start h-full w-full"> 
      <form id="inputForm" className="w-2/3 mt-16">
          <div className="header">
              <div className="header__grid">
                  <div className="content">
                      <div className="content__grid">
                          <div className="col-12-s6-m4" id="method">
                              <label className="input__label">Upload Method</label>
                              <div>
                                  <button data-value="upload" id="computerButton" className="bttn left fill active">Upload</button>
                                  <button data-value="url" id="urlButton" className="bttn right fill">URL</button>
                              </div>
                          </div>

                          <div className="col-12-m8" id="fileSelectionContainer">
                              <label className="input__label" htmlFor="file">Select File</label>
                              <div className="flex">
                                  <input className="input input--left flex-1" type="text" id="fileName" disabled />
                                  <button id="fileMock" className="bttn right active">Browse</button>
                              </div>
                              <input style={{ display: 'none' }} type="file" id="file" />
                          </div>

                          <div className="col-12-m8" id="urlContainer">
                              <label className="input__label" htmlFor="url">Enter Image URL</label>
                              <div className="flex">
                                  <input type="text" id="url" placeholder="https://path.to/your.jpg" className="input" /><br />
                              </div>
                          </div>

                          <div className="col-6-m3" id="format">
                              <label className="input__label"></label>
                              <div>
                                  <button id="imageButton" data-value="image" className="active"></button>
                                  {/* <button id="jsonButton" data-value="json" className="bttn right fill">JSON</button> */}
                              </div>
                          </div>

                          <div className="col-12">
                              <button type="submit" value="Run Inference" className="bttn__primary">Check Pollution</button>
                          </div>
                      </div>
                      <div className="result mb-24" id="resultContainer">
                          <div className="divider"></div>
                          <div className="result__header">
                              <h3 className="headline">Result</h3>
                              <a href="#"></a>
                          </div>
                          <pre id="output" className="codeblock">here is your json</pre>
                      </div>
                  </div>
              </div>
          </div>
            </form>

        </div>
  )
}
