import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const PaperDetail = () => {
  const { year, id } = useParams();
  const navigate = useNavigate();
  const [paper, setPaper] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load paper data
    const loadPaperData = async () => {
      try {
        // Fetch the paper text file
        const response = await fetch(`/${year}/${id}.txt`);
        const text = await response.text();
        
        // Parse the text to extract abstract and references
        const abstractMatch = text.match(/ABSTRACT:(.*?)(?=KEYWORDS:|References|$)/s);
        const abstract = abstractMatch ? abstractMatch[1].trim() : 'Abstract not available.';
        
        const referencesMatch = text.match(/References\s+(.*)/s);
        const references = referencesMatch ? referencesMatch[1].trim() : 'References not available.';
        
        // Get paper metadata from papers list
        const paperData = getPaperMetadata(year, id);
        
        setPaper({
          ...paperData,
          abstract,
          references
        });
        setLoading(false);
      } catch (error) {
        console.error('Error loading paper:', error);
        setLoading(false);
      }
    };

    loadPaperData();
  }, [year, id]);

  const getPaperMetadata = (year, id) => {
    // This will contain all the paper metadata
    const papers2024 = [
      {
        id: 1,
        type: 'Research Article',
        articleId: 'jcids.2024.001',
        title: 'Optimized Neural Fusion Architecture for Secure Data Validation and Cryptographic Key Regulation in Advanced Cloud Ecosystems',
        authors: 'Niranchana Radhakrishnan, C. Viji, Balusamy Nachiappan',
        received: '09 June 2024',
        accepted: '25 December 2024',
        published: '14 January 2026',
        volume: 1,
        issue: 1,
        year: 2024,
        pages: '1-17',
        doi: '10.62656/jcids.v1i1.1',
        file: '/2024/1.pdf',
        citation: 'Niranchana Radhakrishnan, C. Viji, Balusamy Nachiappan. Optimized neural fusion architecture for secure data validation and cryptographic key regulation in advanced cloud ecosystems. J Comput Intell Decis Sci. 2024;1(1):1.'
      },
      {
        id: 2,
        type: 'Research Article',
        articleId: 'jcids.2024.002',
        title: 'Context-Aware Opinion Mining Framework for Interpreting Learner Reflections through Advanced Sequence Modeling',
        authors: 'C. Vijay, Chandrasekaran Neelakandan',
        received: '30 June 2024',
        accepted: '07 October 2024',
        published: '30 December 2024',
        volume: 1,
        issue: 1,
        year: 2024,
        pages: '18-28',
        doi: '10.62656/jcids.v1i1.2',
        file: '/2024/2.pdf',
        citation: 'Vijay C, Neelakandan C. Context-aware opinion mining framework for interpreting learner reflections through advanced sequence modeling. J Comput Intell Decis Sci. 2024;1(1):2.'
      },
      {
        id: 3,
        type: 'Research Article',
        articleId: 'jcids.2024.003',
        title: 'Privacy-Preserving Framework for Safeguarding Healthcare Data with Embedded Authentication Across Federated Cloud Platforms',
        authors: 'S. Sivakumar, T. Karthikeyan',
        received: '16 July 2024',
        accepted: '07 August 2024',
        published: '30 December 2024',
        volume: 1,
        issue: 1,
        year: 2024,
        pages: '29-40',
        doi: '10.62656/jcids.v1i1.3',
        file: '/2024/3.pdf',
        citation: 'Sivakumar S, Karthikeyan T. Privacy-preserving framework for safeguarding healthcare data with embedded authentication across federated cloud platforms. J Comput Intell Decis Sci. 2024;1(1):3.'
      },
      {
        id: 4,
        type: 'Research Article',
        articleId: 'jcids.2024.004',
        title: 'Enhanced Correlation Mapping Framework Employing Hybrid Evolutionary Strategy for Drug–Disease Association Discovery Across Diverse Biomedical Sources',
        authors: 'Thimmiaraja J, J. Macklin Abraham Navamani, Siva Shankar Ramasamy',
        received: '12 August 2024',
        accepted: '24 September 2024',
        published: '30 December 2024',
        volume: 1,
        issue: 1,
        year: 2024,
        pages: '41-49',
        doi: '10.62656/jcids.v1i1.4',
        file: '/2024/4.pdf',
        citation: 'Thimmiaraja J, Navamani JMA, Ramasamy SS. Enhanced correlation mapping framework employing hybrid evolutionary strategy for drug–disease association discovery across diverse biomedical sources. J Comput Intell Decis Sci. 2024;1(1):4.'
      },
      {
        id: 5,
        type: 'Research Article',
        articleId: 'jcids.2024.005',
        title: 'Cognitive Resource Allocation System with Deep Learning-Based Offloading for Enhanced Mobile Computing Performance',
        authors: 'M. Nalini, Sivakumar Vengusamy',
        received: '20 August 2024',
        accepted: '10 September 2024',
        published: '30 December 2024',
        volume: 1,
        issue: 1,
        year: 2024,
        pages: '50-63',
        doi: '10.62656/jcids.v1i1.5',
        file: '/2024/5.pdf',
        citation: 'Nalini M, Vengusamy S. Cognitive resource allocation system with deep learning-based offloading for enhanced mobile computing performance. J Comput Intell Decis Sci. 2024;1(1):5.'
      },
      {
        id: 6,
        type: 'Research Article',
        articleId: 'jcids.2024.006',
        title: 'Optimized Sequence Recognition Framework for Memory-Assisted Threat Mitigation in Wireless Intrusion Environments',
        authors: 'K. Padmavathi, Basheer Riskhan',
        received: '05 September 2024',
        accepted: '10 October 2024',
        published: '30 December 2024',
        volume: 1,
        issue: 1,
        year: 2024,
        pages: '64-72',
        doi: '10.62656/jcids.v1i1.6',
        file: '/2024/6.pdf',
        citation: 'Padmavathi K, Riskhan B. Optimized sequence recognition framework for memory-assisted threat mitigation in wireless intrusion environments. J Comput Intell Decis Sci. 2024;1(1):6.'
      },
      {
        id: 7,
        type: 'Research Article',
        articleId: 'jcids.2024.007',
        title: 'Reliability-Driven Cloudlet Allocation Framework Leveraging Chaotic Evolutionary Techniques for Mobile Cloud Environments',
        authors: 'P. Jayasheelan, Swamynathan Ramakrishnan',
        received: '09 September 2024',
        accepted: '08 October 2024',
        published: '30 December 2024',
        volume: 1,
        issue: 1,
        year: 2024,
        pages: '73-85',
        doi: '10.62656/jcids.v1i1.7',
        file: '/2024/7.pdf',
        citation: 'Jayasheelan P, Ramakrishnan S. Reliability-driven cloudlet allocation framework leveraging chaotic evolutionary techniques for mobile cloud environments. J Comput Intell Decis Sci. 2024;1(1):7.'
      },
      {
        id: 8,
        type: 'Research Article',
        articleId: 'jcids.2024.008',
        title: 'Nature-Inspired Feature Engineering and Cancer Detection Framework Leveraging Ensemble Convolutional Neural Architectures',
        authors: 'S. Hemalatha, Arokiaraj Selvaraj',
        received: '12 October 2024',
        accepted: '20 December 2024',
        published: '30 December 2024',
        volume: 1,
        issue: 1,
        year: 2024,
        pages: '86-96',
        doi: '10.62656/jcids.v1i1.8',
        file: '/2024/8.pdf',
        citation: 'Hemalatha S, Selvaraj A. Nature-inspired feature engineering and cancer detection framework leveraging ensemble convolutional neural architectures. J Comput Intell Decis Sci. 2024;1(1):8.'
      },
      {
        id: 9,
        type: 'Research Article',
        articleId: 'jcids.2024.009',
        title: 'Automated MRI-Based Brain Lesion Delineation Using Deep Convolutional Neural Models',
        authors: 'K. Dhiyaneshwaran, Shanmugan Joghee',
        received: '19 October 2024',
        accepted: '01 November 2024',
        published: '30 December 2024',
        volume: 1,
        issue: 1,
        year: 2024,
        pages: '97-104',
        doi: '10.62656/jcids.v1i1.9',
        file: '/2024/9.pdf',
        citation: 'Dhiyaneshwaran K, Joghee S. Automated MRI-based brain lesion delineation using deep convolutional neural models. J Comput Intell Decis Sci. 2024;1(1):9.'
      },
      {
        id: 10,
        type: 'Research Article',
        articleId: 'jcids.2024.010',
        title: 'Optimized Term Importance Framework for Automated Feature Derivation in Complex and High-Dimensional Big Data',
        authors: 'Yanglem Loijing Khomba Khuman, Iyyappan Moorthi',
        received: '08 November 2024',
        accepted: '25 November 2024',
        published: '30 December 2024',
        volume: 1,
        issue: 1,
        year: 2024,
        pages: '105-117',
        doi: '10.62656/jcids.v1i1.10',
        file: '/2024/10.pdf',
        citation: 'Khuman YLK, Moorthi I. Optimized term importance framework for automated feature derivation in complex and high-dimensional big data. J Comput Intell Decis Sci. 2024;1(1):10.'
      }
    ];

    const papers2025 = [
      {
        id: 11,
        type: 'Research Article',
        articleId: 'jcids.2025.001',
        title: 'Dynamic Multi-Level Heuristic Framework for Predicting Lung Cancer from CT Scan Data',
        authors: 'S. Dinesh Kumar, T. N. Prabakaran',
        received: '12 November 2024',
        accepted: '20 December 2024',
        published: '14 January 2026',
        volume: 1,
        issue: 2,
        year: 2025,
        pages: '118-132',
        doi: '10.62656/jcids.v1i2.11',
        file: '/2025/11.pdf',
        citation: 'Dinesh Kumar S, Prabakaran TN. Dynamic multi-level heuristic framework for predicting lung cancer from CT scan data. J Comput Intell Decis Sci. 2025;1(2):11.'
      },
      {
        id: 12,
        type: 'Research Article',
        articleId: 'jcids.2025.002',
        title: 'Enhanced User Authorization Framework in Cloud Environments Using Weighted Proximity-Based Trust Evaluation',
        authors: 'T. Pandiyavathi, K. Selvakumar',
        received: '18 November 2024',
        accepted: '28 December 2024',
        published: '14 January 2026',
        volume: 1,
        issue: 2,
        year: 2025,
        pages: '133-150',
        doi: '10.62656/jcids.v1i2.12',
        file: '/2025/12.pdf',
        citation: 'Pandiyavathi T, Selvakumar K. Enhanced user authorization framework in cloud environments using weighted proximity-based trust evaluation. J Comput Intell Decis Sci. 2025;1(2):12.'
      },
      {
        id: 13,
        type: 'Research Article',
        articleId: 'jcids.2025.003',
        title: 'Advanced Sequence Modeling Framework for Analyzing Learner Feedback in Educational Systems',
        authors: 'B. Amutha, S. Ponmalar',
        received: '25 November 2024',
        accepted: '05 January 2025',
        published: '14 January 2026',
        volume: 1,
        issue: 2,
        year: 2025,
        pages: '151-157',
        doi: '10.62656/jcids.v1i2.13',
        file: '/2025/13.pdf',
        citation: 'Amutha B, Ponmalar S. Advanced sequence modeling framework for analyzing learner feedback in educational systems. J Comput Intell Decis Sci. 2025;1(2):13.'
      },
      {
        id: 14,
        type: 'Research Article',
        articleId: 'jcids.2025.004',
        title: 'Two-Dimensional Signal Decomposition for Feature Reduction and Deep Learning-Based Object Detection',
        authors: 'Ananthi Sheshasaayee, Priyanka Vijayan',
        received: '02 December 2024',
        accepted: '10 January 2025',
        published: '14 January 2026',
        volume: 1,
        issue: 2,
        year: 2025,
        pages: '158-167',
        doi: '10.62656/jcids.v1i2.14',
        file: '/2025/14.pdf',
        citation: 'Sheshasaayee A, Vijayan P. Two-dimensional signal decomposition for feature reduction and deep learning-based object detection. J Comput Intell Decis Sci. 2025;1(2):14.'
      },
      {
        id: 15,
        type: 'Research Article',
        articleId: 'jcids.2025.005',
        title: 'Microarray-Based Cancer Classification via Optimized Gene Selection Using Evolutionary Population Strategies',
        authors: 'S. Vijipriya, S. Anandhi Rajamani',
        received: '08 December 2024',
        accepted: '12 January 2025',
        published: '14 January 2026',
        volume: 1,
        issue: 2,
        year: 2025,
        pages: '168-176',
        doi: '10.62656/jcids.v1i2.15',
        file: '/2025/15.pdf',
        citation: 'Vijipriya S, Rajamani SA. Microarray-based cancer classification via optimized gene selection using evolutionary population strategies. J Comput Intell Decis Sci. 2025;1(2):15.'
      },
      {
        id: 16,
        type: 'Research Article',
        articleId: 'jcids.2025.006',
        title: 'Hybrid Recommendation Framework Combining Enhanced Density-Based Clustering and Transductive Support Vector Learning',
        authors: 'S. Karthikeyan, P. Geetha',
        received: '15 December 2024',
        accepted: '15 January 2025',
        published: '14 January 2026',
        volume: 1,
        issue: 2,
        year: 2025,
        pages: '177-184',
        doi: '10.62656/jcids.v1i2.16',
        file: '/2025/16.pdf',
        citation: 'Karthikeyan S, Geetha P. Hybrid recommendation framework combining enhanced density-based clustering and transductive support vector learning. J Comput Intell Decis Sci. 2025;1(2):16.'
      },
      {
        id: 17,
        type: 'Research Article',
        articleId: 'jcids.2025.007',
        title: 'Exploratory Study of Artificial Intelligence Techniques for Detecting Milk Adulteration in Food Safety',
        authors: 'Anand Nayyar, Shaik Khan Zakir, Shubha Singh',
        received: '22 December 2024',
        accepted: '18 January 2025',
        published: '14 January 2026',
        volume: 1,
        issue: 2,
        year: 2025,
        pages: '185-197',
        doi: '10.62656/jcids.v1i2.17',
        file: '/2025/17.pdf',
        citation: 'Nayyar A, Zakir SK, Singh S. Exploratory study of artificial intelligence techniques for detecting milk adulteration in food safety. J Comput Intell Decis Sci. 2025;1(2):17.'
      },
      {
        id: 18,
        type: 'Research Article',
        articleId: 'jcids.2025.008',
        title: 'Collaborative Mobility-Aware Resource Allocation Framework Using Evolutionary Lion Optimization for Next-Generation Mobile Networks',
        authors: 'V. Subramanian, R. Mohan',
        received: '28 December 2024',
        accepted: '20 January 2025',
        published: '14 January 2026',
        volume: 1,
        issue: 2,
        year: 2025,
        pages: '198-208',
        doi: '10.62656/jcids.v1i2.18',
        file: '/2025/18.pdf',
        citation: 'Subramanian V, Mohan R. Collaborative mobility-aware resource allocation framework using evolutionary lion optimization for next-generation mobile networks. J Comput Intell Decis Sci. 2025;1(2):18.'
      },
      {
        id: 19,
        type: 'Research Article',
        articleId: 'jcids.2025.009',
        title: 'Optimized Feature Weighting Framework for Multi-Document Summarization Using Binary Swarm Intelligence Techniques',
        authors: 'K. Saranya, R. Saravanan',
        received: '04 January 2025',
        accepted: '23 January 2025',
        published: '14 January 2026',
        volume: 1,
        issue: 2,
        year: 2025,
        pages: '209-220',
        doi: '10.62656/jcids.v1i2.19',
        file: '/2025/19.pdf',
        citation: 'Saranya K, Saravanan R. Optimized feature weighting framework for multi-document summarization using binary swarm intelligence techniques. J Comput Intell Decis Sci. 2025;1(2):19.'
      },
      {
        id: 20,
        type: 'Research Article',
        articleId: 'jcids.2025.010',
        title: 'Refined Gabor Feature Extraction Combined with Optimized Bayesian Classification for Facial Expression Analysis',
        authors: 'R. Parvathi, J. Janet',
        received: '10 January 2025',
        accepted: '25 January 2025',
        published: '14 January 2026',
        volume: 1,
        issue: 2,
        year: 2025,
        pages: '221-231',
        doi: '10.62656/jcids.v1i2.20',
        file: '/2025/20.pdf',
        citation: 'Parvathi R, Janet J. Refined Gabor feature extraction combined with optimized Bayesian classification for facial expression analysis. J Comput Intell Decis Sci. 2025;1(2):20.'
      }
    ];

    const allPapers = [...papers2024, ...papers2025];
    return allPapers.find(p => p.id === parseInt(id) && p.year === parseInt(year));
  };

  if (loading) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #e8f4fd 0%, #f0f9ff 100%)'
      }}>
        <div style={{ color: '#2c4a80', fontSize: '1.5rem', fontWeight: '600' }}>Loading...</div>
      </div>
    );
  }

  if (!paper) {
    return (
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #e8f4fd 0%, #f0f9ff 100%)'
      }}>
        <div style={{ color: '#2c4a80', fontSize: '1.5rem', fontWeight: '600' }}>Paper not found</div>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #e8f4fd 0%, #f0f9ff 100%)',
      padding: '40px 20px'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        background: 'white',
        borderRadius: '20px',
        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.08)',
        border: '2px solid #3b82f620',
        overflow: 'hidden'
      }}>
        {/* Header */}
        <div style={{
          background: 'linear-gradient(135deg, #2c4a80 0%, #1a3d6b 100%)',
          padding: '35px 40px',
          color: 'white',
          position: 'relative'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '25px' }}>
            <button
              onClick={() => {
                navigate('/journals');
                setTimeout(() => {
                  const archivesElement = document.getElementById('archives');
                  if (archivesElement) {
                    archivesElement.scrollIntoView({ behavior: 'smooth' });
                  }
                }, 100);
              }}
              style={{
                background: 'rgba(255,255,255,0.2)',
                border: 'none',
                color: 'white',
                padding: '10px 20px',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '0.95rem',
                fontWeight: '600',
                transition: 'all 0.2s ease'
              }}
              onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.3)'}
              onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
            >
              ← Back to Journals
            </button>
            
            {/* Small Download Icon */}
            <a
              href={paper.file}
              download
              style={{
                background: 'rgba(255,255,255,0.2)',
                border: 'none',
                color: 'white',
                padding: '10px',
                borderRadius: '50%',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                width: '40px',
                height: '40px'
              }}
              title="Download PDF"
              onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.3)'}
              onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </a>
          </div>
          
          <div style={{
            fontSize: '0.85rem',
            marginBottom: '10px',
            opacity: 0.9,
            fontWeight: '600'
          }}>
            {paper.type} | {paper.articleId}
          </div>
          
          <h1 style={{
            fontSize: '2.2rem',
            margin: '0 0 20px 0',
            lineHeight: '1.4',
            fontWeight: '700'
          }}>
            {paper.title}
          </h1>
          
          <div style={{
            fontSize: '1.05rem',
            marginBottom: '20px',
            opacity: 0.95,
            fontWeight: '500'
          }}>
            <strong>Authors:</strong> {paper.authors}
          </div>
          
          <div style={{
            display: 'flex',
            gap: '20px',
            flexWrap: 'wrap',
            fontSize: '0.9rem',
            opacity: 0.9
          }}>
            <span>📅 Received: {paper.received}</span>
            <span>✓ Accepted: {paper.accepted}</span>
            <span>📖 Published: {paper.published}</span>
          </div>
        </div>

        {/* Content */}
        <div style={{ padding: '45px' }}>
          {/* Publication Info */}
          <div style={{
            background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
            padding: '25px',
            borderRadius: '12px',
            marginBottom: '35px',
            fontSize: '1rem',
            color: '#1e40af',
            fontWeight: '600',
            lineHeight: '1.9',
            border: '1px solid #3b82f630',
            boxShadow: '0 2px 8px rgba(59, 130, 246, 0.1)'
          }}>
            Volume {paper.volume} | Issue {paper.issue} | Year {paper.year} | Pages {paper.pages}
            <br />
            Article Id. {paper.articleId}
            <br />
            DOI: <a 
              href={`https://doi.org/${paper.doi}`} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ color: '#1e40af', textDecoration: 'underline' }}
            >
              https://doi.org/{paper.doi}
            </a>
          </div>

          {/* Abstract */}
          <section style={{ marginBottom: '45px' }}>
            <h2 style={{
              fontSize: '1.8rem',
              color: '#1e293b',
              marginBottom: '20px',
              borderBottom: '4px solid #3b82f6',
              paddingBottom: '12px',
              fontWeight: '700'
            }}>
              Abstract
            </h2>
            <div style={{
              fontSize: '1.05rem',
              lineHeight: '1.9',
              color: '#475569',
              textAlign: 'justify',
              textJustify: 'inter-word',
              background: '#f8fafc',
              padding: '25px',
              borderRadius: '10px',
              border: '1px solid #e2e8f0'
            }}>
              {paper.abstract}
            </div>
          </section>

          {/* References */}
          <section style={{ marginBottom: '45px' }}>
            <h2 style={{
              fontSize: '1.8rem',
              color: '#1e293b',
              marginBottom: '20px',
              borderBottom: '4px solid #3b82f6',
              paddingBottom: '12px',
              fontWeight: '700'
            }}>
              References
            </h2>
            <div style={{
              fontSize: '0.95rem',
              lineHeight: '1.9',
              color: '#475569',
              textAlign: 'justify',
              textJustify: 'inter-word',
              background: '#f8fafc',
              padding: '25px',
              borderRadius: '10px',
              border: '1px solid #e2e8f0'
            }}>
              {paper.references}
            </div>
          </section>

          {/* Citation */}
          <section style={{ marginBottom: '45px' }}>
            <h2 style={{
              fontSize: '1.8rem',
              color: '#1e293b',
              marginBottom: '20px',
              borderBottom: '4px solid #3b82f6',
              paddingBottom: '12px',
              fontWeight: '700'
            }}>
              Cite This Article
            </h2>
            <div style={{
              padding: '25px',
              background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
              borderLeft: '5px solid #3b82f6',
              borderRadius: '10px',
              fontSize: '1rem',
              color: '#475569',
              lineHeight: '1.8',
              fontStyle: 'italic',
              textAlign: 'justify',
              textJustify: 'inter-word',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
            }}>
              {paper.citation}
            </div>
          </section>

          {/* Download Button */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '30px',
            borderTop: '2px solid #e5e7eb'
          }}>
            <a
              href={paper.file}
              download
              style={{
                padding: '18px 56px',
                background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '12px',
                fontSize: '1.15rem',
                fontWeight: '700',
                cursor: 'pointer',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '14px',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(59, 130, 246, 0.4)',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(59, 130, 246, 0.5)';
                e.currentTarget.style.background = 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(59, 130, 246, 0.4)';
                e.currentTarget.style.background = 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)';
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download Full Paper (PDF)
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaperDetail;
