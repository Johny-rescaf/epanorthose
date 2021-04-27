import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";

import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';
import { Button, ButtonToolbar, Icon, Drawer, Form, FormGroup, FormControl, ControlLabel, Input, TagPicker, SelectPicker } from "rsuite";

import Layout from "../components/layout";


let data = [
  {
    "label": "Eugenia",
    "value": "Eugenia",
    "role": "Master"
  },
  {
    "label": "Kariane",
    "value": "Kariane",
    "role": "Master"
  },
  {
    "label": "Louisa",
    "value": "Louisa",
    "role": "Master"
  },
  {
    "label": "Marty",
    "value": "Marty",
    "role": "Master"
  },
  {
    "label": "Kenya",
    "value": "Kenya",
    "role": "Master"
  },
  {
    "label": "Hal",
    "value": "Hal",
    "role": "Developer"
  },
  {
    "label": "Julius",
    "value": "Julius",
    "role": "Developer"
  },
  {
    "label": "Travon",
    "value": "Travon",
    "role": "Developer"
  },
  {
    "label": "Vincenza",
    "value": "Vincenza",
    "role": "Developer"
  },
  {
    "label": "Dominic",
    "value": "Dominic",
    "role": "Developer"
  },
  {
    "label": "Pearlie",
    "value": "Pearlie",
    "role": "Guest"
  },
  {
    "label": "Tyrel",
    "value": "Tyrel",
    "role": "Guest"
  },
  {
    "label": "Jaylen",
    "value": "Jaylen",
    "role": "Guest"
  },
  {
    "label": "Rogelio",
    "value": "Rogelio",
    "role": "Guest"
  }
]

export default function EditPost() {
  const [showDrawer, setShowDrawer] = useState(false);
  const [convertedText, setConvertedText] = useState("Some default content");

  const { quill, quillRef } = useQuill();

  useEffect(() => {
    if (quill) {
      quill.on('text-change', () => {
        const text = quill.root.innerHTML;
        console.log(text);
      });
    }
  }, [quill]);

  return (
    <Layout className="container">
      <Head>
        <title>Edit / add post</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="site-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 offset-md-1">
                <div className="section-title" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <h2>Add article</h2>
                  {/* <Button color="blue" onClick={() => setShowDrawer(true)}>
                    <Icon icon="save" /> Save changes
                  </Button> */}

                  <ButtonToolbar>
                    <Button appearance="primary"><Icon icon="save" /> Save changes</Button>
                    {/* <Link href="/signup">
                      <a>Save changes</a>
                    </Link> */}
                  </ButtonToolbar>
                </div>

                <Form className="my-3" fluid>
                  <FormGroup>
                    <ControlLabel className="mb-3">Article title</ControlLabel>
                    <FormControl name="text" type="text" placeHolder="Article title..." style={{ height: '45px' }} />
                  </FormGroup>
                  
                  <div className="mb-3"> 
                    <ControlLabel className="mb-3">Article tags</ControlLabel>
                    <TagPicker creatable data={data} style={{ width: '100%' }} menuStyle={{width: 300}} />
                  </div>

                  <FormGroup>
                    <ControlLabel className="mb-3">Article summary</ControlLabel>
                    <Input componentClass="textarea" rows={3} placeholder="Textarea" />
                  </FormGroup>
                </Form>

                <ControlLabel className="mb-3">Article Content</ControlLabel>
                <div style={{ width: '100%', height: 400 }}>
                  <div ref={quillRef} />
                </div>

                <ControlLabel className="mt-5">Sources &amp; bibliographie</ControlLabel>
                <Input componentClass="textarea" rows={3} placeholder="Textarea" />

                <ControlLabel className="mt-5">Article Copywrite</ControlLabel>
                <div>
                  <SelectPicker data={data} block />
                </div>

              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
