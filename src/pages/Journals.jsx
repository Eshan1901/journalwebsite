import { useState } from 'react'

const Journals = () => {
  const [activeSection, setActiveSection] = useState('about-press')

  const journalSections = [
    {
      id: 'about-press',
      title: 'About the Press',
      content: (
        <div>
          <div style={{ 
            background: 'linear-gradient(135deg, #e8f4fd 0%, #f0f8ff 100%)', 
            padding: '40px 30px', 
            borderRadius: '12px', 
            marginBottom: '30px',
            border: '1px solid #bee5eb'
          }}>
            <h3 style={{ 
              color: '#1a3d6b', 
              fontSize: '2rem', 
              marginBottom: '20px', 
              fontWeight: 'bold',
              textAlign: 'center'
            }}>
              About Gnosis Press
            </h3>
            <div style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#2c4a80' }}>
              <p style={{ marginBottom: '20px' }}>
                Gnosis Press is an independent academic publishing platform dedicated to advancing high-quality research and knowledge dissemination across disciplines. It provides a space where scholars, practitioners, and policymakers can share original work that contributes to academic debates and addresses real-world challenges.
              </p>
              <p style={{ marginBottom: '20px' }}>
                The press follows an open access model, ensuring that all published research is freely available to readers worldwide without any subscription or paywall restrictions. Its publishing framework is built on the principles of academic rigor, ethical integrity, and global accessibility.
              </p>
              <p style={{ marginBottom: '20px' }}>
                Gnosis Press is committed to a transparent and efficient editorial process. All submissions undergo a double-blind peer review, and authors receive a first decision within six to eight weeks. Every published article is assigned a DOI, making it easily citable and permanently accessible.
              </p>
              <p style={{ marginBottom: '20px' }}>
                The press adheres to internationally recognized ethical standards, including guidelines set by the Committee on Publication Ethics (COPE). It aims to create a global community of researchers and institutions by supporting open knowledge exchange, interdisciplinary scholarship, and innovative research practices.
              </p>
              <p style={{ margin: '0' }}>
                Through its journals and initiatives, Gnosis Press seeks to make scholarly publishing more inclusive, timely, and impactful.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'about-journal',
      title: 'About the Journal',
      content: (
        <div>
          <div style={{ 
            background: 'linear-gradient(135deg, #e8f4fd 0%, #f0f8ff 100%)', 
            padding: '40px 30px', 
            borderRadius: '12px', 
            marginBottom: '30px',
            border: '1px solid #bee5eb'
          }}>
            <h3 style={{ 
              color: '#1a3d6b', 
              fontSize: '2rem', 
              marginBottom: '20px', 
              fontWeight: 'bold',
              textAlign: 'center'
            }}>
              About the Journal
            </h3>
            <div style={{ fontSize: '1.05rem', lineHeight: '1.8', color: '#2c4a80' }}>
              <p style={{ marginBottom: '20px' }}>
                The Journal of Computational Intelligence and Decision Science is an open access, peer-reviewed academic journal published by Gnosis Press. It focuses on advancing research and applications in the areas of computational intelligence, data-driven decision-making, and intelligent systems across multiple domains. The journal welcomes contributions that integrate theory, methodology, and practice to address complex decision problems through innovative computational approaches.
              </p>
              <p style={{ marginBottom: '20px' }}>
                The journal provides immediate and free access to all its published content, enabling researchers, practitioners, and institutions worldwide to engage with the latest findings without any subscription or access barriers. A rigorous double-blind peer review process ensures the quality, originality, and scientific integrity of every manuscript.
              </p>
              <p style={{ marginBottom: '20px' }}>
                Authors can expect an initial decision within six to eight weeks of submission, reflecting the journal's commitment to a timely and transparent review process. All published articles are assigned DOI numbers to ensure global discoverability and persistent access.
              </p>
              <p style={{ marginBottom: '20px' }}>
                The journal adheres to the highest standards of publication ethics and follows the guidelines of the Committee on Publication Ethics (COPE). It encourages interdisciplinary submissions and fosters research that bridges artificial intelligence, computational methods, and decision science to generate real-world impact.
              </p>
              <p style={{ margin: '0' }}>
                The Journal of Computational Intelligence and Decision Science aims to serve as a platform for academic excellence and practical innovation, bringing together researchers, industry experts, and policymakers to shape the future of intelligent decision-making.
              </p>
            </div>
          </div>

          {/* Key Highlights */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '25px'
          }}>
            <div style={{ 
              background: 'white', 
              padding: '30px', 
              borderRadius: '12px', 
              textAlign: 'center',
              border: '1px solid #e9ecef',
              boxShadow: '0 4px 15px rgba(0,0,0,0.08)'
            }}>
              <h4 style={{ color: '#2c4a80', marginBottom: '12px', fontSize: '1.3rem' }}>Fast Review</h4>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#2c4a80', marginBottom: '8px' }}>6-8</div>
              <div style={{ color: '#666', fontSize: '1rem' }}>Weeks to first decision</div>
            </div>
            
            <div style={{ 
              background: 'white', 
              padding: '30px', 
              borderRadius: '12px', 
              textAlign: 'center',
              border: '1px solid #e9ecef',
              boxShadow: '0 4px 15px rgba(0,0,0,0.08)'
            }}>
              <h4 style={{ color: '#2c4a80', marginBottom: '12px', fontSize: '1.3rem' }}>Open Access</h4>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#2c4a80', marginBottom: '8px' }}>100%</div>
              <div style={{ color: '#666', fontSize: '1rem' }}>Immediate worldwide access</div>
            </div>
            
            <div style={{ 
              background: 'white', 
              padding: '30px', 
              borderRadius: '12px', 
              textAlign: 'center',
              border: '1px solid #e9ecef',
              boxShadow: '0 4px 15px rgba(0,0,0,0.08)'
            }}>
              <h4 style={{ color: '#2c4a80', marginBottom: '12px', fontSize: '1.3rem' }}>ISSN</h4>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#2c4a80', marginBottom: '8px' }}>2348-8549</div>
              <div style={{ color: '#666', fontSize: '1rem' }}>Online Journal</div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'vision',
      title: 'Vision & Mission',
      content: (
        <div>
          <div style={{ background: '#e8f4fd', padding: '30px', borderRadius: '12px', marginBottom: '25px', border: '1px solid #bee5eb' }}>
            <h4 style={{ color: '#1a3d6b', marginBottom: '20px', fontSize: '1.5rem', textAlign: 'center' }}>Vision</h4>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#2c4a80', margin: '0', textAlign: 'center' }}>
              To be a global leader in advancing knowledge by fostering open, ethical, and impactful research that bridges academic excellence with real-world relevance, empowering scholars, practitioners, and communities to drive sustainable progress.
            </p>
          </div>
          
          <div style={{ background: 'white', border: '1px solid #e0e0e0', borderRadius: '12px', overflow: 'hidden' }}>
            <div style={{ background: '#2c4a80', color: 'white', padding: '20px', textAlign: 'center' }}>
              <h4 style={{ margin: '0', fontSize: '1.5rem' }}>Mission</h4>
            </div>
            <div style={{ padding: '30px' }}>
              <div style={{ display: 'grid', gap: '25px' }}>
                <div style={{ paddingLeft: '20px', borderLeft: '4px solid #2c4a80' }}>
                  <p style={{ margin: '0', fontSize: '1.05rem', lineHeight: '1.6', color: '#333' }}>
                    • To provide a rigorous, peer-reviewed publishing platform that promotes high-quality interdisciplinary research.
                  </p>
                </div>
                
                <div style={{ paddingLeft: '20px', borderLeft: '4px solid #2c4a80' }}>
                  <p style={{ margin: '0', fontSize: '1.05rem', lineHeight: '1.6', color: '#333' }}>
                    • To ensure rapid and transparent dissemination of knowledge through open and accessible channels.
                  </p>
                </div>
                
                <div style={{ paddingLeft: '20px', borderLeft: '4px solid #2c4a80' }}>
                  <p style={{ margin: '0', fontSize: '1.05rem', lineHeight: '1.6', color: '#333' }}>
                    • To uphold the highest standards of publication ethics, integrity, and scholarly collaboration.
                  </p>
                </div>

                <div style={{ paddingLeft: '20px', borderLeft: '4px solid #2c4a80' }}>
                  <p style={{ margin: '0', fontSize: '1.05rem', lineHeight: '1.6', color: '#333' }}>
                    • To nurture a vibrant global research community by connecting academics, policymakers, and industry leaders.
                  </p>
                </div>

                <div style={{ paddingLeft: '20px', borderLeft: '4px solid #2c4a80' }}>
                  <p style={{ margin: '0', fontSize: '1.05rem', lineHeight: '1.6', color: '#333' }}>
                    • To support innovation, inclusivity, and capacity-building in emerging research domains.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'aim',
      title: 'Journal Aim',
      content: (
        <div>
          <div style={{ 
            background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)', 
            padding: '35px', 
            borderRadius: '12px', 
            marginBottom: '30px',
            border: '1px solid #dee2e6',
            textAlign: 'center'
          }}>
            <h3 style={{ color: '#1a3d6b', marginBottom: '25px', fontSize: '2rem' }}>
              Journal Aim
            </h3>
            <p style={{ fontSize: '1.15rem', lineHeight: '1.8', color: '#2c4a80', margin: '0 0 20px 0', fontWeight: '500' }}>
              The journal aims to advance and disseminate high-quality, original, and interdisciplinary research that contributes to academic scholarship, informs practice, and addresses emerging global challenges. It seeks to serve as a trusted platform that connects researchers, practitioners, and policymakers, promoting ethical, inclusive, and impactful knowledge creation.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#2c4a80', margin: '0' }}>
              The Journal of Computational Intelligence and Decision Science aims to advance research and innovation in the fields of artificial intelligence, computational methods, and data-driven decision-making. The journal seeks to provide a platform for the publication of original, high-quality, and impactful research that integrates computational intelligence techniques with real-world decision support applications.
            </p>
          </div>

          <div style={{ 
            background: '#e8f4fd', 
            padding: '30px', 
            borderRadius: '12px',
            border: '1px solid #bee5eb',
            marginBottom: '25px'
          }}>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#2c4a80', margin: '0' }}>
              The journal encourages contributions that combine theory, models, algorithms, systems, and applied studies to address complex decision problems in diverse domains such as business, management, engineering, healthcare, public policy, education, and technology. It welcomes interdisciplinary work that bridges computational intelligence with human-centered and organizational decision-making processes.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'scope',
      title: 'Scope',
      content: (
        <div>
          <div style={{ 
            background: 'linear-gradient(135deg, #2c4a80 0%, #1a3d6b 100%)',
            color: 'white',
            padding: '30px', 
            borderRadius: '12px', 
            textAlign: 'center',
            marginBottom: '30px'
          }}>
            <h3 style={{ color: 'white', marginBottom: '15px', fontSize: '2rem' }}>
              Journal Scope
            </h3>
            <p style={{ fontSize: '1.15rem', lineHeight: '1.7', margin: '0' }}>
              The journal publishes original research work and reviews that advance knowledge at the intersection of computational intelligence, data-driven methods and decision science.
            </p>
          </div>

          <div style={{ background: '#e8f4fd', padding: '30px', borderRadius: '12px', marginBottom: '30px', border: '1px solid #bee5eb' }}>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#2c4a80', margin: '0 0 15px 0' }}>
              It welcomes manuscripts that explore theory, algorithms, systems and applications in domains such as business & management, engineering & technology, healthcare & life sciences, education, public policy & governance, and sustainable development.
            </p>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#2c4a80', margin: '0', fontWeight: '600' }}>
              Topics of interest include but are not limited to:
            </p>
          </div>

          <div style={{ display: 'grid', gap: '20px' }}>
            {[
              'Machine learning, deep learning and neural network-based decision support systems',
              'Soft computing, fuzzy logic, evolutionary and meta-heuristic optimisation methods',
              'Simulation, modelling, agent-based systems and intelligent automation for decision making',
              'Data analytics, big data, knowledge representation and reasoning for decision processes',
              'Human-in-the-loop and hybrid intelligence systems, expert systems, cognitive computing',
              'Applications of computational intelligence in real-world settings: industry, finance, healthcare, education, smart cities, climate and sustainability',
              'Interdisciplinary studies bridging computational methods with organisational, human, ethical and policy dimensions of decision making'
            ].map((topic, index) => (
              <div
                key={index}
                style={{
                  background: 'white',
                  padding: '20px 25px',
                  borderRadius: '10px',
                  border: '1px solid #e9ecef',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                  display: 'flex',
                  alignItems: 'start',
                  gap: '15px'
                }}
              >
                <div style={{
                  minWidth: '30px',
                  height: '30px',
                  borderRadius: '50%',
                  background: '#2c4a80',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  fontSize: '0.9rem'
                }}>
                  {index + 1}
                </div>
                <p style={{ margin: '5px 0 0 0', lineHeight: '1.6', color: '#333', fontSize: '1rem' }}>
                  {topic}
                </p>
              </div>
            ))}
          </div>

          <div style={{ 
            background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)', 
            padding: '25px', 
            borderRadius: '12px',
            marginTop: '30px',
            border: '1px solid #dee2e6',
            textAlign: 'center'
          }}>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#2c4a80', margin: '0', fontStyle: 'italic' }}>
              The journal aims to serve academics, practitioners and policymakers by providing a high-quality open access platform for contributions that combine rigour with relevance, thereby promoting impactful research that informs intelligent decision making in diverse global contexts.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'domain-tracks',
      title: 'Domain Tracks',
      content: (
        <div>
          <div style={{ 
            background: 'linear-gradient(135deg, #2c4a80 0%, #1a3d6b 100%)',
            color: 'white',
            padding: '30px', 
            borderRadius: '12px', 
            textAlign: 'center',
            marginBottom: '30px'
          }}>
            <h3 style={{ color: 'white', marginBottom: '15px', fontSize: '2rem' }}>
              Research Domain Tracks
            </h3>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.6', margin: '0' }}>
              JCIDS welcomes research submissions across eight comprehensive domain tracks.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '25px' }}>
            {[
              {
                title: 'AI & Machine Learning',
                description: 'Neural networks, deep learning, reinforcement learning, supervised/unsupervised learning, transfer learning, federated learning, AutoML, and AI optimization techniques.'
              },
              {
                title: 'Data Mining & Big Data',
                description: 'Knowledge discovery, pattern recognition, clustering, classification, association rules, big data processing, cloud computing, and distributed analytics.'
              },
              {
                title: 'Natural Language Processing',
                description: 'Text analysis, sentiment analysis, language models, machine translation, chatbots, voice recognition, and speech synthesis.'
              },
              {
                title: 'Computer Vision',
                description: 'Image recognition, object detection, facial recognition, medical imaging, video analysis, augmented reality, and 3D vision.'
              },
              {
                title: 'IoT & Edge Computing',
                description: 'Internet of Things, edge computing, sensor networks, smart devices, embedded intelligence, and real-time analytics.'
              },
              {
                title: 'Cybersecurity & AI Ethics',
                description: 'AI security, privacy-preserving ML, ethical AI, algorithmic fairness, AI governance, explainable AI, and bias detection.'
              },
              {
                title: 'Health Informatics',
                description: 'Medical AI, genomics, precision medicine, drug discovery, healthcare analytics, and telemedicine.'
              },
              {
                title: 'Robotics & Automation',
                description: 'Autonomous systems, robotic process automation, industrial automation, smart manufacturing, and human-robot interaction.'
              }
            ].map((track, index) => (
              <div
                key={index}
                style={{
                  background: 'white',
                  padding: '25px',
                  borderRadius: '12px',
                  border: '1px solid #e9ecef',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.08)'
                }}
              >
                <h4 style={{ color: '#2c4a80', margin: '0 0 15px 0', fontSize: '1.3rem' }}>
                  Track {index + 1}: {track.title}
                </h4>
                <p style={{ margin: '0', lineHeight: '1.6', color: '#555', fontSize: '0.95rem' }}>
                  {track.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'editorial-policy',
      title: 'Editorial Policy',
      content: (
        <div>
          <div style={{ 
            background: 'linear-gradient(135deg, #2c4a80 0%, #1a3d6b 100%)',
            color: 'white',
            padding: '30px', 
            borderRadius: '12px', 
            textAlign: 'center',
            marginBottom: '30px'
          }}>
            <h3 style={{ color: 'white', marginBottom: '15px', fontSize: '2rem' }}>
              Editorial Policy
            </h3>
            <p style={{ fontSize: '1.15rem', lineHeight: '1.7', margin: '0' }}>
              The Journal of Computational Intelligence and Decision Science follows a transparent and rigorous editorial policy to ensure the quality, originality, and ethical integrity of every manuscript.
            </p>
          </div>

          <div style={{ background: '#e8f4fd', padding: '25px', borderRadius: '12px', marginBottom: '30px', border: '1px solid #bee5eb' }}>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#2c4a80', margin: '0' }}>
              The editorial process is designed to maintain academic standards, provide fair and timely review, and support open access dissemination of research.
            </p>
          </div>

          <div style={{ display: 'grid', gap: '15px' }}>
            {[
              'All submissions must be original and not under review elsewhere.',
              'The journal follows a double-blind peer review process to ensure impartial evaluation.',
              'All manuscripts undergo an initial editorial screening for relevance, originality, and ethical compliance.',
              'Reviewers are selected based on subject expertise and must disclose any conflicts of interest.',
              'Final editorial decisions are made by the Editor-in-Chief, based on reviewers\' recommendations and the journal\'s standards.',
              'The journal adheres to the guidelines of the Committee on Publication Ethics (COPE).',
              'Authors, reviewers, and editors are required to declare conflicts of interest and funding sources.',
              'Every published article is assigned a DOI and made openly accessible without subscription barriers.',
              'Post-publication corrections, retractions, or clarifications will be issued when necessary to maintain research integrity.',
              'Transparency is maintained in editorial timelines, including time to first decision and revision cycles.',
              'Editorial board members who submit manuscripts are excluded from the decision-making process on their own work.',
              'The journal encourages data availability and methodological transparency to support reproducibility.',
              'The editorial policy is periodically reviewed to align with evolving best practices in academic publishing.'
            ].map((policy, index) => (
              <div
                key={index}
                style={{
                  background: 'white',
                  padding: '18px 22px',
                  borderRadius: '10px',
                  border: '1px solid #e9ecef',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                  display: 'flex',
                  alignItems: 'start',
                  gap: '12px'
                }}
              >
                <div style={{ color: '#2c4a80', fontSize: '1.2rem', marginTop: '2px' }}>✓</div>
                <p style={{ margin: '0', lineHeight: '1.6', color: '#333', fontSize: '1rem' }}>
                  {policy}
                </p>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'reviewer-policy',
      title: 'Review Policy',
      content: (
        <div>
          <div style={{ 
            background: 'linear-gradient(135deg, #2c4a80 0%, #1a3d6b 100%)',
            color: 'white',
            padding: '30px', 
            borderRadius: '12px', 
            textAlign: 'center',
            marginBottom: '30px'
          }}>
            <h3 style={{ color: 'white', marginBottom: '15px', fontSize: '2rem' }}>
              Review Policy
            </h3>
            <p style={{ fontSize: '1.15rem', lineHeight: '1.7', margin: '0' }}>
              The Journal of Computational Intelligence and Decision Science follows a rigorous and transparent peer review process to ensure the publication of high-quality, original research.
            </p>
          </div>

          <div style={{ background: '#e8f4fd', padding: '25px', borderRadius: '12px', marginBottom: '30px', border: '1px solid #bee5eb' }}>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#2c4a80', margin: '0' }}>
              The review system is designed to maintain academic integrity, provide constructive feedback to authors, and support timely editorial decisions.
            </p>
          </div>

          <div style={{ display: 'grid', gap: '15px' }}>
            {[
              'The journal follows a double-blind peer review process. Identities of authors and reviewers are kept confidential throughout the review cycle.',
              'All submissions undergo an initial editorial screening to assess suitability, quality, and compliance with ethical standards.',
              'Manuscripts that pass the initial screening are assigned to expert reviewers with relevant subject expertise.',
              'Reviewers are expected to provide objective, constructive, and evidence-based feedback within the stipulated review timeline.',
              'Each manuscript is reviewed by at least two independent reviewers to ensure balanced and fair evaluation.',
              'The review focuses on originality, methodological rigor, clarity of presentation, significance of contribution, and relevance to the journal\'s scope.',
              'Reviewers must disclose any potential conflicts of interest before accepting a review assignment.',
              'The editorial team makes the final decision—accept, revise, or reject—based on reviewers\' recommendations and the journal\'s quality standards.',
              'Authors receive detailed reviewer comments and are expected to address all points systematically in their revised submissions.',
              'Revised manuscripts may be sent for a second round of review, depending on the extent of revisions required.',
              'The review process typically leads to a first decision within six to eight weeks of submission.',
              'All participants in the review process must maintain strict confidentiality and respect the intellectual property of submitted work.',
              'The journal periodically evaluates and updates its review policy to reflect best practices in scholarly publishing and peer review ethics.'
            ].map((policy, index) => (
              <div
                key={index}
                style={{
                  background: 'white',
                  padding: '18px 22px',
                  borderRadius: '10px',
                  border: '1px solid #e9ecef',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                  display: 'flex',
                  alignItems: 'start',
                  gap: '12px'
                }}
              >
                <div style={{ color: '#2c4a80', fontSize: '1.2rem', marginTop: '2px' }}>✓</div>
                <p style={{ margin: '0', lineHeight: '1.6', color: '#333', fontSize: '1rem' }}>
                  {policy}
                </p>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'open-access',
      title: 'Open Access Policy',
      content: (
        <div>
          <div style={{ 
            background: 'linear-gradient(135deg, #2c4a80 0%, #1a3d6b 100%)',
            color: 'white',
            padding: '30px', 
            borderRadius: '12px', 
            textAlign: 'center',
            marginBottom: '30px'
          }}>
            <h3 style={{ color: 'white', marginBottom: '15px', fontSize: '2rem' }}>
              Open Access Policy
            </h3>
            <p style={{ fontSize: '1.15rem', lineHeight: '1.7', margin: '0' }}>
              The Journal of Computational Intelligence and Decision Science follows a full open access publishing model, ensuring that all articles are freely and permanently available online to readers worldwide.
            </p>
          </div>

          <div style={{ background: '#e8f4fd', padding: '30px', borderRadius: '12px', marginBottom: '30px', border: '1px solid #bee5eb' }}>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#2c4a80', margin: '0' }}>
              The journal supports unrestricted access to research findings, encouraging wider dissemination, increased visibility, and greater impact of published work.
            </p>
          </div>

          <div style={{ display: 'grid', gap: '15px', marginBottom: '30px' }}>
            {[
              'All articles are published under an open access model and are available online without any subscription or paywall.',
              'Authors retain the copyright to their work, and articles are distributed under a Creative Commons license that allows sharing and reuse with proper attribution.',
              'Readers can freely read, download, copy, distribute, print, and cite published articles without prior permission, provided the original source is properly credited.',
              'Each article is assigned a DOI to ensure permanent accessibility and reliable citation.',
              'The journal ensures a transparent editorial and publication process without hidden costs for readers or institutions.',
              'Open access aligns with international efforts to make scientific knowledge widely available, accelerating innovation and promoting global collaboration.',
              'The journal adheres to ethical standards and maintains the integrity of the scholarly record while enabling open dissemination of knowledge.'
            ].map((policy, index) => (
              <div
                key={index}
                style={{
                  background: 'white',
                  padding: '18px 22px',
                  borderRadius: '10px',
                  border: '1px solid #e9ecef',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                  display: 'flex',
                  alignItems: 'start',
                  gap: '12px'
                }}
              >
                <div style={{ color: '#2c4a80', fontSize: '1.2rem', marginTop: '2px' }}>✓</div>
                <p style={{ margin: '0', lineHeight: '1.6', color: '#333', fontSize: '1rem' }}>
                  {policy}
                </p>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'editorial-workflow',
      title: 'Editorial Workflow',
      content: (
        <div>
          <div style={{ 
            background: 'linear-gradient(135deg, #2c4a80 0%, #1a3d6b 100%)',
            color: 'white',
            padding: '30px', 
            borderRadius: '12px', 
            textAlign: 'center',
            marginBottom: '30px'
          }}>
            <h3 style={{ color: 'white', marginBottom: '15px', fontSize: '2rem' }}>
              Editorial Workflow
            </h3>
            <p style={{ fontSize: '1.15rem', lineHeight: '1.7', margin: '0' }}>
              The Journal of Computational Intelligence and Decision Science follows a structured and transparent editorial workflow to ensure fairness, quality, and efficiency at every stage of the publication process.
            </p>
          </div>

          <div style={{ background: '#e8f4fd', padding: '25px', borderRadius: '12px', marginBottom: '30px', border: '1px solid #bee5eb' }}>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#2c4a80', margin: '0' }}>
              The workflow is designed to maintain academic standards, minimize delays, and provide authors with a clear understanding of the process from submission to publication.
            </p>
          </div>

          <div style={{ display: 'grid', gap: '25px' }}>
            {[
              {
                step: '1. Manuscript Submission',
                desc: 'Authors submit their manuscripts ONLY to the email Id provided (eic.jcids@gnosispress.org). All required files, including the main manuscript, figures, tables, supplementary materials, author details, declarations, and ethical approvals (if applicable), must be provided at the time of submission.'
              },
              {
                step: '2. Initial Screening (Desk Review)',
                desc: 'Upon submission, the editorial office checks the manuscript for completeness, formatting, plagiarism, and alignment with the journal\'s scope. Manuscripts that do not meet the basic requirements may be returned to authors for technical corrections or declined at this stage.'
              },
              {
                step: '3. Assignment to Editor',
                desc: 'Once the submission passes the initial checks, it is assigned to the Editor-in-Chief or a designated Associate Editor based on the topic area. The handling editor evaluates the manuscript\'s quality, originality, relevance, and compliance with ethical standards.'
              },
              {
                step: '4. Editorial Evaluation',
                desc: 'The handling editor decides whether the manuscript proceeds to peer review. Manuscripts with insufficient quality, scope mismatch, or ethical issues may be rejected without external review (desk rejection). Authors are notified promptly in such cases.'
              },
              {
                step: '5. Reviewer Selection and Invitation',
                desc: 'For manuscripts sent for review, the handling editor identifies and invites two or more qualified reviewers with relevant subject expertise. Reviewers must disclose any conflicts of interest before accepting the assignment.'
              },
              {
                step: '6. Double-Blind Peer Review',
                desc: 'The journal follows a double-blind peer review model, ensuring that both authors and reviewers remain anonymous to each other. Reviewers assess the manuscript\'s originality, methodology, clarity, contribution, and relevance. They provide detailed, constructive feedback and a recommendation (accept, minor revision, major revision, or reject).'
              },
              {
                step: '7. Editorial Decision (Round 1)',
                desc: 'The handling editor evaluates the reviewers\' comments and makes a decision: accept, revise (minor or major), or reject. A decision letter along with anonymized reviewer feedback is sent to the authors.'
              },
              {
                step: '8. Author Revision and Resubmission',
                desc: 'If revisions are requested, authors prepare a revised manuscript along with a point-by-point response letter addressing all reviewer comments. The revised submission must be completed within the stipulated timeline.'
              },
              {
                step: '9. Second Review (if required)',
                desc: 'Revised manuscripts may undergo an additional round of peer review, particularly if major changes were made. The same reviewers are typically re-invited to ensure continuity of evaluation.'
              },
              {
                step: '10. Final Editorial Decision',
                desc: 'After considering reviewer recommendations and the quality of revisions, the handling editor, in consultation with the Editor-in-Chief if necessary, makes the final decision on acceptance or rejection.'
              },
              {
                step: '11. Copyediting and Proofreading',
                desc: 'Accepted manuscripts undergo professional language editing, formatting, and typesetting to meet the journal\'s publication standards. Authors receive page proofs for final corrections and must review them carefully for accuracy.'
              },
              {
                step: '12. DOI Assignment and Online First Publication',
                desc: 'Once proofs are finalized, the article is assigned a DOI and published online ahead of its inclusion in an issue. This ensures rapid visibility and citation.'
              },
              {
                step: '13. Issue Compilation and Indexing',
                desc: 'Articles are then organized into the appropriate volume and issue. The journal ensures proper indexing and discoverability through open access platforms and databases.'
              },
              {
                step: '14. Post-Publication Updates',
                desc: 'The journal allows for post-publication corrections, retractions, or updates if necessary, in accordance with COPE guidelines. Authors and readers can contact the editorial office to report errors or ethical concerns.'
              }
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  background: 'white',
                  padding: '25px',
                  borderRadius: '12px',
                  border: '1px solid #e9ecef',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'start', gap: '15px' }}>
                  <div style={{
                    minWidth: '45px',
                    height: '45px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #2c4a80 0%, #1a3d6b 100%)',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    fontSize: '1.1rem'
                  }}>
                    {index + 1}
                  </div>
                  <div style={{ flex: 1 }}>
                    <h5 style={{ color: '#1a3d6b', margin: '0 0 10px 0', fontSize: '1.15rem' }}>
                      {item.step}
                    </h5>
                    <p style={{ margin: '0', lineHeight: '1.6', color: '#555', fontSize: '1rem' }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ 
            background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)', 
            padding: '25px', 
            borderRadius: '12px',
            marginTop: '30px',
            border: '1px solid #dee2e6',
            textAlign: 'center'
          }}>
            <p style={{ fontSize: '1.05rem', lineHeight: '1.7', color: '#2c4a80', margin: '0', fontWeight: '600' }}>
              For submission queries, please contact: <a href="mailto:eic.jcids@gnosispress.org" style={{ color: '#1a3d6b', textDecoration: 'none' }}>eic.jcids@gnosispress.org</a>
            </p>
          </div>
        </div>
      )
    }
  ]

  return (
    <div className="container" style={{ maxWidth: '1400px', margin: '0 auto', padding: '40px 20px' }}>
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h1 style={{ 
          fontSize: '3rem', 
          fontWeight: '800', 
          color: '#1e293b', 
          marginBottom: '20px',
          background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          Journal of Computational Intelligence and Decision Science
        </h1>
        <p style={{ 
          fontSize: '1.3rem', 
          color: '#64748b', 
          maxWidth: '800px', 
          margin: '0 auto',
          lineHeight: '1.6'
        }}>
          Advancing research in artificial intelligence, machine learning, and intelligent decision-making systems
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', gap: '40px' }}>
        {/* Navigation Menu */}
        <div>
          <div style={{ 
            background: '#2c4a80', 
            color: 'white', 
            padding: '20px',
            borderRadius: '12px 12px 0 0',
            marginBottom: '0'
          }}>
            <h3 style={{ margin: '0', fontSize: '1.3rem' }}>Journal Information</h3>
          </div>
          <div style={{ 
            background: 'white', 
            border: '1px solid #ddd',
            borderTop: 'none',
            borderRadius: '0 0 12px 12px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.08)'
          }}>
            {journalSections.map((section) => (
              <div
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                style={{
                  padding: '18px 24px',
                  cursor: 'pointer',
                  borderBottom: '1px solid #f0f0f0',
                  backgroundColor: activeSection === section.id ? '#e8f4fd' : 'white',
                  color: activeSection === section.id ? '#1a3d6b' : '#2c4a80',
                  fontWeight: activeSection === section.id ? '600' : '500',
                  transition: 'all 0.2s ease',
                  fontSize: '1rem'
                }}
                onMouseOver={(e) => {
                  if (activeSection !== section.id) {
                    e.target.style.backgroundColor = '#f8f9fa';
                  }
                }}
                onMouseOut={(e) => {
                  if (activeSection !== section.id) {
                    e.target.style.backgroundColor = 'white';
                  }
                }}
              >
                {section.title}
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div style={{ 
            background: '#2c4a80', 
            color: 'white', 
            padding: '20px',
            borderRadius: '12px 12px 0 0',
            marginTop: '30px',
            marginBottom: '0'
          }}>
            <h3 style={{ margin: '0', fontSize: '1.3rem' }}>Quick Actions</h3>
          </div>
          <div style={{ 
            background: 'white', 
            border: '1px solid #ddd',
            borderTop: 'none',
            borderRadius: '0 0 12px 12px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.08)'
          }}>
            <a href="/submit" style={{ 
              display: 'block',
              padding: '18px 24px',
              color: '#2c4a80',
              textDecoration: 'none',
              borderBottom: '1px solid #f0f0f0',
              transition: 'background 0.2s',
              fontSize: '1rem'
            }}>
              Submit Paper
            </a>
            <a href="mailto:eic.jcids@gnosispress.org?subject=JCIDS Editorial Inquiry" style={{ 
              display: 'block',
              padding: '18px 24px',
              color: '#2c4a80',
              textDecoration: 'none',
              transition: 'background 0.2s',
              fontSize: '1rem'
            }}>
              Contact Editorial
            </a>
          </div>
        </div>

        {/* Main Content Area */}
        <div>
          <div style={{ 
            background: 'white',
            padding: '40px',
            borderRadius: '16px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
            border: '1px solid #e2e8f0'
          }}>
            <h2 style={{ 
              color: '#1a3d6b', 
              marginBottom: '30px', 
              fontSize: '2.2rem',
              borderBottom: '3px solid #2c4a80',
              paddingBottom: '15px',
              fontWeight: '700'
            }}>
              {journalSections.find(section => section.id === activeSection)?.title}
            </h2>
            <div style={{ lineHeight: '1.6', color: '#333' }}>
              {journalSections.find(section => section.id === activeSection)?.content}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Journals