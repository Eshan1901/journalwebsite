import { useEffect } from 'react'

const InstructionsToAuthors = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="page-container" style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
      <div className="page-header" style={{
        background: 'linear-gradient(135deg, #2c5aa0 0%, #1e3f7a 100%)',
        padding: '60px 40px',
        borderRadius: '10px',
        textAlign: 'center',
        marginBottom: '40px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{ color: 'white', fontSize: '2.5rem', marginBottom: '15px' }}>
          <i className="fas fa-file-alt"></i> Instructions to Authors
        </h1>
        <p style={{ color: '#e3f2fd', fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>
          Guidelines for Manuscript Preparation and Submission to Journal of Computational Intelligence and Decision Science (JCIDS)
        </p>
      </div>

      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        {/* Overview Section */}
        <div className="card">
          <h2><i className="fas fa-info-circle"></i> Overview</h2>
          <p>
            All manuscripts must be submitted via email to <strong>submission.jcids@gnosispress.org</strong>, and manuscripts submitted for publication must be prepared according to the guidelines given below.
          </p>
          <div style={{ 
            background: '#e3f2fd', 
            padding: '15px', 
            borderRadius: '5px',
            border: '1px solid #2196f3',
            marginTop: '15px'
          }}>
            <p style={{ marginBottom: '10px' }}><strong>Download Template:</strong></p>
            <div style={{ textAlign: 'center', marginTop: '15px' }}>
              <a 
                href="/JCIDS_Template_2026.docx" 
                download="JCIDS_Template_2026.docx"
                style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '10px',
                  textDecoration: 'none',
                  background: '#2c5aa0',
                  color: 'white',
                  padding: '12px 24px',
                  borderRadius: '5px',
                  fontSize: '16px',
                  fontWeight: '600',
                  transition: 'background 0.3s'
                }}
                onMouseEnter={(e) => e.target.style.background = '#1e3f7a'}
                onMouseLeave={(e) => e.target.style.background = '#2c5aa0'}
              >
                <i className="fas fa-file-word"></i>
                Download JCIDS Template (DOCX)
              </a>
            </div>
          </div>
          <p style={{ marginTop: '15px' }}>
            This guideline is intended to assist authors as they prepare their manuscripts. To avoid any delay and time-consuming restructuring, Journal of Computational Intelligence and Decision Science (JCIDS) asks and encourages authors to read the guidelines before writing the manuscript.
          </p>
          <p>
            JCIDS publishes review and research articles. All papers must be written in English, and follow a clear, concise style. The language editors may have to check the language and grammar of your submitted manuscript, and make editorial changes if deemed necessary.
          </p>
        </div>

        {/* Submission Process */}
        <div className="card">
          <h2><i className="fas fa-paper-plane"></i> Submission Process</h2>
          
          <div style={{ 
            background: '#f8f9fa', 
            padding: '25px', 
            borderRadius: '8px', 
            textAlign: 'center',
            margin: '20px 0',
            border: '2px solid #28a745'
          }}>
            <div style={{ marginBottom: '15px' }}>
              <strong style={{ fontSize: '1.3rem', color: '#28a745', display: 'block', marginBottom: '10px' }}>
                📧 Email Submission Address
              </strong>
              <a href="mailto:submission.jcids@gnosispress.org" style={{ 
                fontSize: '1.4rem', 
                color: '#2c5aa0',
                textDecoration: 'none',
                fontWeight: 'bold'
              }}>
                submission.jcids@gnosispress.org
              </a>
            </div>
          </div>

          <h3>Email Submission Checklist:</h3>
          <ul>
            <li><strong>Subject Line:</strong> "JCIDS Submission: [Your Paper Title]"</li>
            <li><strong>Attachment:</strong> PDF file of your complete manuscript</li>
            <li><strong>Email Body:</strong> Include author names, affiliations, and brief abstract</li>
            <li><strong>Cover Letter:</strong> Attach as separate document or include in email body</li>
            <li><strong>Statement of Novelty:</strong> 100-200 words</li>
            <li><strong>Corresponding Author:</strong> Clearly identify with complete contact details</li>
          </ul>

          <h3 style={{ marginTop: '25px' }}>Review Timeline:</h3>
          <div style={{ marginTop: '15px' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
              <div style={{ 
                width: '35px', 
                height: '35px', 
                borderRadius: '50%', 
                background: '#28a745', 
                color: 'white', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                marginRight: '15px',
                fontWeight: 'bold',
                flexShrink: 0
              }}>1</div>
              <div>
                <strong>Initial Review (2-3 days):</strong> Editorial screening for scope and format compliance
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
              <div style={{ 
                width: '35px', 
                height: '35px', 
                borderRadius: '50%', 
                background: '#17a2b8', 
                color: 'white', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                marginRight: '15px',
                fontWeight: 'bold',
                flexShrink: 0
              }}>2</div>
              <div>
                <strong>Peer Review (4-6 weeks):</strong> Double-blind review by subject matter experts
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
              <div style={{ 
                width: '35px', 
                height: '35px', 
                borderRadius: '50%', 
                background: '#ffc107', 
                color: 'white', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                marginRight: '15px',
                fontWeight: 'bold',
                flexShrink: 0
              }}>3</div>
              <div>
                <strong>Decision (1-2 weeks):</strong> Editorial decision and reviewer feedback
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ 
                width: '35px', 
                height: '35px', 
                borderRadius: '50%', 
                background: '#dc3545', 
                color: 'white', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                marginRight: '15px',
                fontWeight: 'bold',
                flexShrink: 0
              }}>4</div>
              <div>
                <strong>Publication (2-3 weeks after acceptance):</strong> Final formatting and online publication
              </div>
            </div>
          </div>
        </div>

        {/* Cover Letter */}
        <div className="card">
          <h2><i className="fas fa-envelope-open-text"></i> Cover Letter</h2>
          <p>
            A submitted manuscript must be accompanied by a cover letter. The cover letter must clearly state that:
          </p>
          <ul>
            <li>The manuscript is an original work with its own merit</li>
            <li>Has not been previously published in whole or in part</li>
            <li>Is not being considered for publication elsewhere</li>
            <li>All authors have read the final manuscript</li>
            <li>All authors have approved the submission to the journal</li>
            <li>All authors have accepted full responsibilities pertaining to the manuscript's delivery and contents</li>
          </ul>
          <p>
            If there are any ethical, copyright, or disclosure issues that come with the manuscript, please reveal them in the cover letter. Authors need to declare that there is no conflict of interests or disclose all conflicts of interest regarding the manuscript submitted.
          </p>

          <h3 style={{ marginTop: '25px' }}>Statement of Novelty</h3>
          <p>
            The statement of novelty should be submitted with a manuscript. The statement should be <strong>100-200 words</strong>, and must not be a paraphrase of the abstract.
          </p>
          <p>In the statement of novelty, the authors should address:</p>
          <ol>
            <li>What is the novelty or originality of the research, compared to the existing literature</li>
            <li>The scientific impact of the research and interests to readers</li>
          </ol>
        </div>

        {/* Templates */}
        <div className="card">
          <h2><i className="fas fa-file-alt"></i> Templates</h2>
          <p>
            Authors are strongly encouraged to use the Microsoft Word template to prepare their manuscript. Using the provided template will significantly speed up the copy-editing and publication process for accepted manuscripts.
          </p>
          
          <div style={{ 
            background: '#fff3cd', 
            padding: '15px', 
            borderRadius: '5px',
            border: '1px solid #ffc107',
            marginTop: '15px',
            marginBottom: '15px'
          }}>
            <p style={{ margin: 0 }}>
              <strong><i className="fas fa-exclamation-triangle"></i> File Size Limit:</strong> The total file size for all submissions must not exceed 200 MB. If the file size exceeds this limit, please contact the Editorial Office at <strong>submission.jcids@gnosispress.org</strong>.
            </p>
          </div>

          <h3>Template Instructions:</h3>
          <div style={{ marginBottom: '20px' }}>
            <h4><i className="fas fa-file-word"></i> Microsoft Word Template</h4>
            <p>
              Manuscripts prepared in Microsoft Word must be submitted as a single file. The template includes predefined styles accessible via the "Styles" gallery in Word. Figures should be inserted into the main text immediately after the paragraph where they are first cited.
            </p>
            <ul style={{ marginTop: '10px' }}>
              <li>Download the JCIDS DOCX template above</li>
              <li>Replace placeholder text with your content</li>
              <li>Use the predefined styles for consistent formatting</li>
              <li>Submit your completed manuscript as PDF to submission.jcids@gnosispress.org</li>
            </ul>
          </div>

          <div>
            <h4><i className="fas fa-paperclip"></i> Supplementary Files</h4>
            <p>
              These can be in any format, though it is recommended to use common, non-proprietary formats whenever possible.
            </p>
          </div>
        </div>

        {/* General Format */}
        <div className="card">
          <h2><i className="fas fa-file-invoice"></i> General Format of Articles</h2>
          <p>Manuscripts should comprise:</p>
          
          <div style={{ marginTop: '20px' }}>
            <h3><i className="fas fa-chevron-right"></i> Front Matter</h3>
            <ul>
              <li>Title</li>
              <li>Author list</li>
              <li>Affiliations</li>
              <li>Abstract</li>
              <li>Keywords</li>
            </ul>

            <h4 style={{ marginTop: '20px' }}>• Title</h4>
            <p>
              The title of your manuscript should be precise, clear, and directly related to the study. Acronyms are not allowed in paper titles. They can be used in abstracts only if the related expanded form is provided (just after the acronym, in parentheses) the first time they are used.
            </p>

            <h4>• Author Information</h4>
            <p>
              Please provide the full names of all authors, including first and last names, with middle name initials included if necessary. Affiliations should follow the PubMed/MEDLINE standard format, including detailed address information such as city, postal code, state/province, and country. At least one author must be designated as the corresponding author, whose email address will be publicly displayed in the published article.
            </p>
            <div style={{ 
              background: '#e3f2fd', 
              padding: '12px', 
              borderRadius: '5px',
              border: '1px solid #2196f3',
              marginTop: '10px'
            }}>
              <p style={{ margin: 0, fontSize: '14px' }}>
                <strong>Note:</strong> For authors with equal contributions, use a superscript symbol (#) for identification and include the statement: "These authors contributed equally to this work."
              </p>
            </div>

            <h4 style={{ marginTop: '20px' }}>• Author Affiliations</h4>
            <p>
              All authors must include their current affiliation as well as the institution where the majority of the research for the manuscript was conducted. Authors who are not currently associated with any university, institution, or organization should identify themselves as <strong>"Independent Researchers."</strong>
            </p>

            <h4>• Abstract</h4>
            <p>
              Abstracts of a research paper should be typically <strong>200 to 400 words</strong> in length, and <strong>150 to 300 words</strong> for a review paper. Abstracts shall be running continuously and shall not include reference citations. Abbreviations that appear only once in the abstract should be defined in full.
            </p>

            <h4>• Keywords</h4>
            <p>
              Please list <strong>3 to 10</strong> pertinent keywords specific to the article yet reasonably common within the subject discipline.
            </p>
          </div>

          <div style={{ marginTop: '30px' }}>
            <h3><i className="fas fa-chevron-right"></i> Main Text</h3>
            <p>
              For Articles, a structured format is recommended: <strong>Introduction, Results, Discussion, Methods, Conclusions</strong>. Reviews may use a more flexible structure.
            </p>
          </div>

          <div style={{ marginTop: '30px' }}>
            <h3><i className="fas fa-chevron-right"></i> Back Matter</h3>
            <ul>
              <li>Acknowledgment</li>
              <li>Funding Statement</li>
              <li>Author Contributions</li>
              <li>Availability of Data and Materials</li>
              <li>Ethics Approval</li>
              <li>Conflict of Interests</li>
              <li>Supplementary Materials (if any)</li>
              <li>Glossary (if any)</li>
              <li>Appendices (if any)</li>
              <li>References</li>
            </ul>
          </div>
        </div>

        {/* Figures and Tables */}
        <div className="card">
          <h2><i className="fas fa-image"></i> Figures and Tables</h2>
          
          <h3>Order and Citation</h3>
          <ol>
            <li>Figures and tables should be numbered consecutively using Arabic numerals and placed within the text immediately following their first citation</li>
            <li>The first citation of figures and tables in the main text must follow a sequential order</li>
            <li>Lettered subpanels of figures may be cited in any order after the first mention of the whole figure (e.g., Fig. 3C before Fig. 3A, provided Figs. 1 and 2 have been cited)</li>
          </ol>

          <h3 style={{ marginTop: '25px' }}>Content Requirements</h3>
          <ul>
            <li>Figure content should be complete and characters should not be masked</li>
            <li>Any special characters or icons (e.g., *, **, #) need corresponding explanations</li>
            <li>Remove all non-English terms or add definitions for them</li>
            <li>References in the form of "[xx]" are not allowed in images</li>
            <li>No specific feature should be augmented, altered, enhanced, obscured, moved, or removed</li>
          </ul>

          <h3 style={{ marginTop: '25px' }}>Resolution and Format</h3>
          <p>
            Figures should be scaled to a maximum width of <strong>16.51 cm (6.50 in)</strong> and height of <strong>20 cm (7.87 in)</strong>. The preferred format is <strong>.tif</strong>, with RGB color space, a DPI of 500+.
          </p>
          
          <table style={{ 
            width: '100%', 
            borderCollapse: 'collapse',
            marginTop: '15px',
            border: '1px solid #dee2e6'
          }}>
            <thead>
              <tr style={{ background: '#f8f9fa' }}>
                <th style={{ padding: '12px', border: '1px solid #dee2e6', textAlign: 'left' }}>Image Type</th>
                <th style={{ padding: '12px', border: '1px solid #dee2e6', textAlign: 'left' }}>Description</th>
                <th style={{ padding: '12px', border: '1px solid #dee2e6', textAlign: 'left' }}>Format</th>
                <th style={{ padding: '12px', border: '1px solid #dee2e6', textAlign: 'left' }}>Resolution</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ padding: '10px', border: '1px solid #dee2e6' }}>Line Art</td>
                <td style={{ padding: '10px', border: '1px solid #dee2e6' }}>Lines and text, no tonal areas</td>
                <td style={{ padding: '10px', border: '1px solid #dee2e6' }}>tif or eps</td>
                <td style={{ padding: '10px', border: '1px solid #dee2e6' }}>900–1200 dpi</td>
              </tr>
              <tr>
                <td style={{ padding: '10px', border: '1px solid #dee2e6' }}>Halftone</td>
                <td style={{ padding: '10px', border: '1px solid #dee2e6' }}>Continuous tone photograph</td>
                <td style={{ padding: '10px', border: '1px solid #dee2e6' }}>tif</td>
                <td style={{ padding: '10px', border: '1px solid #dee2e6' }}>300 dpi</td>
              </tr>
              <tr>
                <td style={{ padding: '10px', border: '1px solid #dee2e6' }}>Combo</td>
                <td style={{ padding: '10px', border: '1px solid #dee2e6' }}>Halftone + text or line art</td>
                <td style={{ padding: '10px', border: '1px solid #dee2e6' }}>tif or eps</td>
                <td style={{ padding: '10px', border: '1px solid #dee2e6' }}>500–900 dpi</td>
              </tr>
            </tbody>
          </table>

          <h3 style={{ marginTop: '25px' }}>Labels and Captions</h3>
          <ul>
            <li>Labels must be sized in proportion to the image (no smaller than 8-point)</li>
            <li>Use standard fonts (Arial, Helvetica or Symbol)</li>
            <li>All labels should be in black</li>
            <li>Space must be inserted before measurement units</li>
            <li>Provide a short title and sufficient explanation in the legend</li>
            <li>Multi-panel figures should be assembled as a single file</li>
            <li>Sublabels (A, B, C, D) should be placed in the top left-hand corner</li>
          </ul>

          <h3 style={{ marginTop: '25px' }}>Scale Bar</h3>
          <p>
            A scale bar, rather than magnification, must be provided for any micrographs. The scale bar should be explicitly and prominently displayed on each figure.
          </p>

          <h3 style={{ marginTop: '25px' }}>Copyright of Figures and Tables</h3>
          <p>
            Ensure that permission has been obtained and there is no copyright issue. If copyright is needed, provide citation: "Reprinted/adapted with permission from reference [xx]. Copyright year, copyright owner's name". All figures, tables, and images will be published under a Creative Commons CC-BY license.
          </p>
        </div>

        {/* Additional Guidelines */}
        <div className="card">
          <h2><i className="fas fa-ruler"></i> Additional Guidelines</h2>
          
          <h3>Acronyms/Abbreviations/Initialisms</h3>
          <p>
            Must be defined upon first use in three sections: the abstract, the main text, and the first figure or table. When first introduced, include the abbreviation in parentheses following the full term. Accepted abbreviations for statistical parameters are: P, n, SD, SEM, df, ns, ANOVA, t.
          </p>

          <h3 style={{ marginTop: '25px' }}>International System of Units</h3>
          <p>The use of SI Units is required. Key rules:</p>
          <ul>
            <li>Space between unit and number: <code>5 mm</code> NOT <code>5mm</code></li>
            <li>Space before and after operator: <code>3 cm × 5 cm</code> NOT <code>3 cm×5 cm</code></li>
            <li>Use Arabic numbers: <code>5 kg</code> NOT <code>five kilograms</code></li>
            <li>No hyphen between value and unit: <code>5 kg</code> NOT <code>5-kg</code></li>
            <li>Clarify all units: <code>3 cm × 5 cm</code> NOT <code>3 × 5 cm</code></li>
          </ul>

          <h3 style={{ marginTop: '25px' }}>Symbols</h3>
          <p>
            Greek letters must be inserted using the correct Greek symbol (Times, Helvetica or Symbol font), NOT written in full. Examples: α (alpha), β (beta), γ (gamma).
          </p>

          <h3 style={{ marginTop: '25px' }}>Equations</h3>
          <p>
            If preparing in Word, use the Microsoft Equation Editor or MathType add-on. Ensure equations are editable and not inserted as images.
          </p>

          <h3 style={{ marginTop: '25px' }}>Statistical Analysis</h3>
          <p>When statistical analysis is performed, provide:</p>
          <ul>
            <li>Name of the statistical test used</li>
            <li>The number for each analysis</li>
            <li>The comparisons of interest</li>
            <li>The alpha level and actual p-value</li>
          </ul>
          <p>Reporting guidelines:</p>
          <ul>
            <li>When P &lt; 0.001, report as <em>P</em> &lt; 0.001</li>
            <li>When P &gt; 0.99, report as <em>P</em> &gt; 0.99</li>
          </ul>

          <h3 style={{ marginTop: '25px' }}>Scientific Naming</h3>
          <p>
            Linnean scientific names should be in <em>italics</em>, while higher than generic taxa should not. Gene designations should be lowercase and in italics, while protein designations should be in regular capital letters. All <em>p</em> in p-value should be lowercase and italic.
          </p>
        </div>

        {/* Back Matter / Declarations */}
        <div className="card">
          <h2><i className="fas fa-file-signature"></i> Declarations (Back Matter)</h2>
          <p>
            The following 6 pieces of information need to be truthfully provided at the end of the article:
          </p>

          <h3>1. Acknowledgement</h3>
          <p>
            This section is for acknowledging any support not covered under Author Contributions or Funding Statement sections. If there are no acknowledgments, use "Not applicable".
          </p>

          <h3>2. Funding Statement</h3>
          <p>
            Describe sources of funding that have supported the work, including specific grant numbers and URLs to sponsors' websites. Format: "This research was funded by Name of Funder, grant number xxx". If no funding: "The author(s) received no specific funding for this study".
          </p>

          <h3>3. Author Contributions</h3>
          <p>
            Mandatory for research articles (except single-author papers). Suggested format:
          </p>
          <div style={{ 
            background: '#f8f9fa', 
            padding: '15px', 
            borderRadius: '5px',
            border: '1px solid #dee2e6',
            fontSize: '14px',
            fontStyle: 'italic',
            marginTop: '10px'
          }}>
            "The authors confirm contribution to the paper as follows: Conceptualization, First-name Lastname1 and First-name Lastname2; methodology, First-name Lastname1; software, First-name Lastname1; validation, First-name Lastname1, First-name Lastname2 and First-name Lastname3; formal analysis, First-name Lastname1; investigation, First-name Lastname1; resources, First-name Lastname1; data curation, First-name Lastname1; writing—original draft preparation, First-name Lastname1; writing—review and editing, First-name Lastname1; visualization, First-name Lastname1; supervision, First-name Lastname1; project administration, First-name Lastname1; funding acquisition, First-name Lastname1. All authors reviewed the results and approved the final version of the manuscript."
          </div>

          <h3 style={{ marginTop: '25px' }}>4. Availability of Data and Materials</h3>
          <p>
            This statement should inform readers where the data can be accessed. Select appropriate template:
          </p>
          <ul>
            <li><strong>Public Repository:</strong> "The data supporting the findings are openly available in [repository name] at [DOI/URL]."</li>
            <li><strong>In Article/Supplementary:</strong> "All data are included within the article and/or its Supplementary Materials."</li>
            <li><strong>Upon Request:</strong> "Data are available from the corresponding author upon reasonable request."</li>
            <li><strong>Restricted:</strong> "Restrictions apply due to [ethical/legal/privacy] reasons."</li>
            <li><strong>No New Data:</strong> "No new data were created or analyzed in this study."</li>
          </ul>

          <h3 style={{ marginTop: '25px' }}>5. Ethics Approval</h3>
          <p>
            State whether the study included human or animal subjects. Include:
          </p>
          <ul>
            <li>The committee which approved the study</li>
            <li>Compliance documents and policies</li>
            <li>Reference or approval number</li>
            <li>Use "Not applicable" for studies not involving humans or animals</li>
          </ul>

          <h3 style={{ marginTop: '25px' }}>6. Conflicts of Interest</h3>
          <p>
            Declare conflicts of interest or state: "The author(s) declare(s) no conflicts of interest to report regarding the present study."
          </p>
        </div>

        {/* References */}
        <div className="card">
          <h2><i className="fas fa-book"></i> References</h2>
          <p>
            Gnosis Press recommends editors and authors to utilize professional reference management tools such as Mendeley or Zotero for academic writing and literature formatting.
          </p>
          <p>
            All references should be cited in the main text sequentially and listed individually at the end of the manuscript. We recommend preparing references with bibliography software (Mendeley, Zotero). Include the digital object identifier (DOI) for all references where available.
          </p>

          <h3>Citation Format</h3>
          <p>
            Use square brackets and consecutive numbers: [1], [2,3], [4–6]. For embedded citations with pagination: [5] (p. 10), or [6] (p. 101–105). When a reference is the subject of a sentence, use author's last name: Rhee [1] or "Reference [1]". For multiple authors: Al-Khshali et al. [2].
          </p>

          <h3 style={{ marginTop: '25px' }}>Reference Style</h3>
          
          <h4><i className="fas fa-newspaper"></i> Journals</h4>
          <div style={{ 
            background: '#f8f9fa', 
            padding: '12px', 
            borderRadius: '5px',
            border: '1px solid #dee2e6',
            marginTop: '10px',
            fontSize: '14px',
            fontFamily: 'monospace'
          }}>
            1. Author AA, Author BB. Title of article. Abbreviated Journal Name. Year;volume(issue):pagination.
          </div>

          <h4 style={{ marginTop: '20px' }}><i className="fas fa-book"></i> Books</h4>
          <div style={{ 
            background: '#f8f9fa', 
            padding: '12px', 
            borderRadius: '5px',
            border: '1px solid #dee2e6',
            marginTop: '10px',
            fontSize: '14px',
            fontFamily: 'monospace'
          }}>
            3. Author AA, Author BB. Title of the book. Publisher Location: Publisher; Year. Pagination (Optional).
            <br /><br />
            8. Author AA, Author BB. Title of the chapter. In: Editor AA, Editor BB, editors. Title of the book. xth ed. Publisher Location: Publisher; Year. Pagination (Required).
          </div>

          <h4 style={{ marginTop: '20px' }}><i className="fas fa-users"></i> Conferences</h4>
          <div style={{ 
            background: '#f8f9fa', 
            padding: '12px', 
            borderRadius: '5px',
            border: '1px solid #dee2e6',
            marginTop: '10px',
            fontSize: '14px',
            fontFamily: 'monospace'
          }}>
            11. Author AA, Author BB. Title of the paper. In: Editor AA, Editor BB, editors. Conference Title: Proceedings of the xth Name of Conference; Date; Location. Publisher Location: Publisher; Year. Pagination (Required).
          </div>

          <h4 style={{ marginTop: '20px' }}><i className="fas fa-graduation-cap"></i> Dissertations and Theses</h4>
          <div style={{ 
            background: '#f8f9fa', 
            padding: '12px', 
            borderRadius: '5px',
            border: '1px solid #dee2e6',
            marginTop: '10px',
            fontSize: '14px',
            fontFamily: 'monospace'
          }}>
            13. Author AA. Title of dissertation [dissertation/master's thesis]. Location: Institution Name; Year. Pagination (Optional).
          </div>

          <h4 style={{ marginTop: '20px' }}><i className="fas fa-globe"></i> Web Sites</h4>
          <div style={{ 
            background: '#f8f9fa', 
            padding: '12px', 
            borderRadius: '5px',
            border: '1px solid #dee2e6',
            marginTop: '10px',
            fontSize: '14px',
            fontFamily: 'monospace'
          }}>
            14. Author AA/Organization. Title of webpage [Internet]. Location: Publisher; Date [cited 2024 Jan 1]. Available from: http://URL.
          </div>

          <h4 style={{ marginTop: '20px' }}><i className="fas fa-lightbulb"></i> Patents</h4>
          <div style={{ 
            background: '#f8f9fa', 
            padding: '12px', 
            borderRadius: '5px',
            border: '1px solid #dee2e6',
            marginTop: '10px',
            fontSize: '14px',
            fontFamily: 'monospace'
          }}>
            15. Inventor AA, Inventor BB, inventors; Assignee AA, assignee. Title of the patent. Country of patent Patent number. Issue date.
          </div>
        </div>

        {/* Data Sharing */}
        <div className="card">
          <h2><i className="fas fa-database"></i> Data Sharing and Code Availability</h2>
          <p>
            At Gnosis Press, we value open scientific exchange and believe in promoting transparency and reproducibility in research. Authors are required to include a Data Availability Statement in all submissions.
          </p>

          <h3>Data Repositories</h3>
          <p>
            Authors are strongly encouraged to deposit research data in reputable and discipline-specific data repositories. Preferred repositories: Dataverse, Dryad, figshare, GigaScience, Mendeley Data, Zenodo.
          </p>

          <h3 style={{ marginTop: '25px' }}>Code Availability</h3>
          <p>
            Authors should release novel computer code by depositing it in a recognized public repository such as GitHub or uploading it as supplementary information. Include all parameters used to run software/program analyses.
          </p>
        </div>

        {/* Contact Section */}
        <div className="card" style={{ 
          background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
          border: '2px solid #2c5aa0'
        }}>
          <h2 style={{ color: '#2c5aa0' }}><i className="fas fa-envelope"></i> Questions?</h2>
          <p style={{ fontSize: '1.1rem' }}>
            If you have any questions about the submission guidelines, please contact our editorial office:
          </p>
          <div style={{ textAlign: 'center', margin: '20px 0' }}>
            <a href="mailto:submission.jcids@gnosispress.org" style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '10px',
              textDecoration: 'none',
              background: '#2c5aa0',
              color: 'white',
              padding: '15px 30px',
              borderRadius: '5px',
              fontSize: '18px',
              fontWeight: '600',
              transition: 'background 0.3s'
            }}
            onMouseEnter={(e) => e.target.style.background = '#1e3f7a'}
            onMouseLeave={(e) => e.target.style.background = '#2c5aa0'}
            >
              <i className="fas fa-paper-plane"></i>
              submission.jcids@gnosispress.org
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default InstructionsToAuthors
