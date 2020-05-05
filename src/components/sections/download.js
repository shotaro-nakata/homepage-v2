import React from 'react'
import './download.scss'
import Section from './section'

import Title from '../components/section_title'
export default () => (
  <Section
    type="center"
    className=""
    container="1200px"
    style={{ backgroundColor: '#03abd8' }}
    title={<Title className="title_dark" center="true" title="ダウンロード" />}
  >
    <div className="download">
      <p>今すぐダウンロードしてはじめましょう!</p>
      <div className="download_link">
        <img
          className="appicon"
          src="data:image/jpeg;base64,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"
        />
        <div className="download_link_store">
          <div className="download_link_store_img">
            <div>
              <img src="/assets/appstore.svg" height="65px" />
              <img src="/assets/playstore.svg" height="65px" />
            </div>
          </div>
          <div className="download_link_store_legal">
            Apple および Apple ロゴは米国その他の国で登録された Apple Inc.
            の商標です。App Store は Apple Inc. のサービスマークです。
            <br />
            Google Play および Google Play ロゴは Google LLC の商標です。
          </div>
        </div>
      </div>
    </div>
  </Section>
)