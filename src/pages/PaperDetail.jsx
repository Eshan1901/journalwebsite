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
        const abstractMatch = text.match(/ABSTRACT:(.*?)(?=KEYWORDS:|Keywords:|References|$)/si);
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
        published: '14 January 2025',
        volume: 1,
        issue: 1,
        year: 2024,
        pages: '1-17',
        doi: '10.62656/jcids.v1i1.1',
        file: '/2024/1.pdf',
        citation: 'Niranchana Radhakrishnan, C. Viji, Balusamy Nachiappan, "Optimized Neural Fusion Architecture for Secure Data Validation and Cryptographic Key Regulation in Advanced Cloud Ecosystems," Journal of Computational Intelligence and Decision Science (JCIDS), Vol. 01, Issue 1, pp. 1-18, 2024.  https://doi.org/10.XXXX/jcids.2024.001'
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
        citation: 'C. Vijay and Chandrasekaran Neelakandan, "Context-Aware Opinion Mining Framework for Interpreting Learner Reflections through Advanced Sequence Modeling," Journal of Computational Intelligence and Decision Science (JCIDS), Vol. 01, Issue 1, pp. 19-35, 2024. https://doi.org/10.XXXX/jcids.2024.002'
      },
      {
        id: 3,
        type: 'Research Article',
        articleId: 'jcids.2024.003',
        title: 'Privacy-Preserving Framework for Safeguarding Healthcare Data with Embedded Authentication Across Federated Cloud Platforms',
        authors: 'S. Sivakumar, T. Karthikeyan',
        received: '20 June 2024',
        accepted: '09 September 2024',
        published: '30 December 2024',
        volume: 1,
        issue: 1,
        year: 2024,
        pages: '29-40',
        doi: '10.62656/jcids.v1i1.3',
        file: '/2024/3.pdf',
        citation: 'S. Sivakumar and T. Karthikeyan, "Privacy-Preserving Framework for Safeguarding Healthcare Data with Embedded Authentication Across Federated Cloud Platforms," Journal of Computational Intelligence and Decision Science (JCIDS), Vol. 01, Issue 1, pp. 36-54, 2024. https://doi.org/10.XXXX/jcids.2024.003'
      },
      {
        id: 4,
        type: 'Research Article',
        articleId: 'jcids.2024.004',
        title: 'Enhanced Correlation Mapping Framework Employing Hybrid Evolutionary Strategy for Drug–Disease Association Discovery Across Diverse Biomedical Sources',
        authors: 'Thimmiaraja J, J. Macklin Abraham Navamani, Siva Shankar Ramasamy',
        received: '01 July 2024',
        accepted: '15 October 2024',
        published: '30 December 2024',
        volume: 1,
        issue: 1,
        year: 2024,
        pages: '41-49',
        doi: '10.62656/jcids.v1i1.4',
        file: '/2024/4.pdf',
        citation: 'Thimmiaraja J, J. Macklin Abraham Navamani and Siva Shankar Ramasamy, "Enhanced Correlation Mapping Framework Employing Hybrid Evolutionary Strategy for Drug–Disease Association Discovery Across Diverse Biomedical Sources," Journal of Computational Intelligence and Decision Science (JCIDS), Vol. 01, Issue 1, pp. 55-70, 2024. https://doi.org/10.XXXX/jcids.2024.004'
      },
      {
        id: 5,
        type: 'Research Article',
        articleId: 'jcids.2024.005',
        title: 'Cognitive Resource Allocation System with Deep Learning-Based Offloading for Enhanced Mobile Computing Performance',
        authors: 'M. Nalini, Sivakumar Vengusamy',
        received: '10 June 2024',
        accepted: '12 October 2024',
        published: '30 December 2024',
        volume: 1,
        issue: 1,
        year: 2024,
        pages: '50-63',
        doi: '10.62656/jcids.v1i1.5',
        file: '/2024/5.pdf',
        citation: 'M. Nalini and Sivakumar Vengusamy, "Cognitive Resource Allocation System with Deep Learning-Based Offloading for Enhanced Mobile Computing Performance," Journal of Computational Intelligence and Decision Science (JCIDS), Vol. 01, Issue 1, pp. 71-92, 2024. https://doi.org/10.XXXX/jcids.2024.005'
      },
      {
        id: 6,
        type: 'Research Article',
        articleId: 'jcids.2024.006',
        title: 'Optimized Sequence Recognition Framework for Memory-Assisted Threat Mitigation in Wireless Intrusion Environments',
        authors: 'K. Padmavathi, Basheer Riskhan',
        received: '09 June 2024',
        accepted: '20 September 2024',
        published: '30 December 2024',
        volume: 1,
        issue: 1,
        year: 2024,
        pages: '64-72',
        doi: '10.62656/jcids.v1i1.6',
        file: '/2024/6.pdf',
        citation: 'K. Padmavathi and Basheer Riskhan, "Optimized Sequence Recognition Framework for Memory-Assisted Threat Mitigation in Wireless Intrusion Environments," Journal of Computational Intelligence and Decision Science (JCIDS), Vol. 01, Issue 1, pp. 93-108, 2024. https://doi.org/10.XXXX/jcids.2024.006'
      },
      {
        id: 7,
        type: 'Research Article',
        articleId: 'jcids.2024.007',
        title: 'Reliability-Driven Cloudlet Allocation Framework Leveraging Chaotic Evolutionary Techniques for Mobile Cloud Environments',
        authors: 'P. Jayasheelan, Swamynathan Ramakrishnan',
        received: '25 June 2024',
        accepted: '13 September 2024',
        published: '30 December 2024',
        volume: 1,
        issue: 1,
        year: 2024,
        pages: '73-85',
        doi: '10.62656/jcids.v1i1.7',
        file: '/2024/7.pdf',
        citation: 'P. Jayasheelan and Swamynathan Ramakrishnan, "Reliability-Driven Cloudlet Allocation Framework Leveraging Chaotic Evolutionary Techniques for Mobile Cloud Environments," Journal of Computational Intelligence and Decision Science (JCIDS), Vol. 01, Issue 1, pp. 109-125, 2024. https://doi.org/10.XXXX/jcids.2024.007'
      },
      {
        id: 8,
        type: 'Research Article',
        articleId: 'jcids.2024.008',
        title: 'Nature-Inspired Feature Engineering and Cancer Detection Framework Leveraging Ensemble Convolutional Neural Architectures',
        authors: 'S. Hemalatha, Arokiaraj Selvaraj',
        received: '25 June 2024',
        accepted: '06 September 2024',
        published: '30 December 2024',
        volume: 1,
        issue: 1,
        year: 2024,
        pages: '86-96',
        doi: '10.62656/jcids.v1i1.8',
        file: '/2024/8.pdf',
        citation: 'S. Hemalatha and Arokiaraj Selvaraj, "Nature-Inspired Feature Engineering and Cancer Detection Framework Leveraging Ensemble Convolutional Neural Architectures," Journal of Computational Intelligence and Decision Science (JCIDS), Vol. 01, Issue 1, pp. 126-143, 2024. https://doi.org/10.XXXX/jcids.2024.008'
      },
      {
        id: 9,
        type: 'Research Article',
        articleId: 'jcids.2024.009',
        title: 'Automated MRI-Based Brain Lesion Delineation Using Deep Convolutional Neural Models',
        authors: 'K. Dhiyaneshwaran, Shanmugan Joghee',
        received: '21 June 2024',
        accepted: '15 September 2024',
        published: '30 December 2024',
        volume: 1,
        issue: 1,
        year: 2024,
        pages: '97-104',
        doi: '10.62656/jcids.v1i1.9',
        file: '/2024/9.pdf',
        citation: 'K. Dhiyaneshwaran and Shanmugan Joghee, "Automated MRI-Based Brain Lesion Delineation Using Deep Convolutional Neural Models," Journal of Computational Intelligence and Decision Science (JCIDS), Vol. 01, Issue 1, pp. 144-159, 2024. https://doi.org/10.XXXX/jcids.2024.009'
      },
      {
        id: 10,
        type: 'Research Article',
        articleId: 'jcids.2024.010',
        title: 'Optimized Term Importance Framework for Automated Feature Derivation in Complex and High-Dimensional Big Data',
        authors: 'Yanglem Loijing Khomba Khuman, Iyyappan Moorthi',
        received: '14 June 2024',
        accepted: '11 September 2024',
        published: '30 December 2024',
        volume: 1,
        issue: 1,
        year: 2024,
        pages: '105-117',
        doi: '10.62656/jcids.v1i1.10',
        file: '/2024/10.pdf',
        citation: 'Yanglem Loijing Khomba Khuman and Iyyappan Moorthi, "Optimized Term Importance Framework for Automated Feature Derivation in Complex and High-Dimensional Big Data," Journal of Computational Intelligence and Decision Science (JCIDS), Vol. 01, Issue 1, pp. 160-175, 2024. https://doi.org/10.XXXX/jcids.2024.010'
      }
    ];

    const papers2025 = [
      {
        id: 11,
        type: 'Research Article',
        articleId: 'jcids.2025.001',
        title: 'Dynamic Multi-Level Heuristic Framework for Predicting Lung Cancer from CT Scan Data',
        authors: 'S. Dinesh Kumar, T. N. Prabakaran',
        received: '26 July 2024',
        accepted: '17 October 2025',
        published: '22 December 2025',
        volume: 2,
        issue: 2,
        year: 2025,
        pages: '118-132',
        doi: '10.62656/jcids.v2i2.11',
        file: '/2025/11.pdf',
        citation: 'Nongmaithem Ajith Singh and Rajkumar Palaniappan, "Dynamic Multi-Level Heuristic Framework for Predicting Lung Cancer from CT Scan Data," Journal of Computational Intelligence and Decision Science (JCIDS), Vol. 02, Issue 2, pp. 1-20, 2025. https://doi.org/10.XXXX/jcids.2025.011'
      },
      {
        id: 12,
        type: 'Research Article',
        articleId: 'jcids.2025.002',
        title: 'Enhanced User Authorization Framework in Cloud Environments Using Weighted Proximity-Based Trust Evaluation',
        authors: 'T. Pandiyavathi, K. Selvakumar',
        received: '20 July 2024',
        accepted: '15 October 2025',
        published: '22 December 2025',
        volume: 2,
        issue: 2,
        year: 2025,
        pages: '133-150',
        doi: '10.62656/jcids.v2i2.12',
        file: '/2025/12.pdf',
        citation: 'D. Nethra Pingala Suthishni, K. Prabavathy and Balusamy Nachiappan, "Enhanced User Authorization Framework in Cloud Environments Using Weighted Proximity-Based Trust Evaluation," Journal of Computational Intelligence and Decision Science (JCIDS), Vol. 02, Issue 2, pp. 21-37, 2025. https://doi.org/10.XXXX/jcids.2025.012'
      },
      {
        id: 13,
        type: 'Research Article',
        articleId: 'jcids.2025.003',
        title: 'Advanced Sequence Modeling Framework for Analyzing Learner Feedback in Educational Systems',
        authors: 'B. Amutha, S. Ponmalar',
        received: '11 August 2024',
        accepted: '18 October 2025',
        published: '22 December 2025',
        volume: 2,
        issue: 2,
        year: 2025,
        pages: '151-157',
        doi: '10.62656/jcids.v2i2.13',
        file: '/2025/13.pdf',
        citation: 'K. Nirmala Devi, Radhika K and Chandrasekaran Neelakandan, "Advanced Sequence Modeling Framework for Analyzing Learner Feedback in Educational Systems," Journal of Computational Intelligence and Decision Science (JCIDS), Vol. 02, Issue 2, pp. 38-50, 2025. https://doi.org/10.XXXX/jcids.2025.013'
      },
      {
        id: 14,
        type: 'Research Article',
        articleId: 'jcids.2025.004',
        title: 'Two-Dimensional Signal Decomposition for Feature Reduction and Deep Learning-Based Object Detection',
        authors: 'Ananthi Sheshasaayee, Priyanka Vijayan',
        received: '13 August 2024',
        accepted: '25 October 2025',
        published: '22 December 2025',
        volume: 2,
        issue: 2,
        year: 2025,
        pages: '158-167',
        doi: '10.62656/jcids.v2i2.14',
        file: '/2025/14.pdf',
        citation: 'K. Reena, A. Kalaivani and T. Karthikeyan, "Two-Dimensional Signal Decomposition for Feature Reduction and Deep Learning-Based Object Detection," Journal of Computational Intelligence and Decision Science (JCIDS), Vol. 02, Issue 2, pp. 51-72, 2025. https://doi.org/10.XXXX/jcids.2025.014'
      },
      {
        id: 15,
        type: 'Research Article',
        articleId: 'jcids.2025.005',
        title: 'Microarray-Based Cancer Classification via Optimized Gene Selection Using Evolutionary Population Strategies',
        authors: 'S. Vijipriya, S. Anandhi Rajamani',
        received: '15 July 2024',
        accepted: '11 October 2025',
        published: '22 December 2025',
        volume: 2,
        issue: 2,
        year: 2025,
        pages: '168-176',
        doi: '10.62656/jcids.v2i2.15',
        file: '/2025/15.pdf',
        citation: 'T. Saravanan, Krishnaveni Sakkarapani and Siva Shankar Ramasamy, "Microarray-Based Cancer Classification via Optimized Gene Selection Using Evolutionary Population Strategies," Journal of Computational Intelligence and Decision Science (JCIDS), Vol. 02, Issue 2, pp. 73-89, 2025. https://doi.org/10.XXXX/jcids.2025.015'
      },
      {
        id: 16,
        type: 'Research Article',
        articleId: 'jcids.2025.006',
        title: 'Hybrid Recommendation Framework Combining Enhanced Density-Based Clustering and Transductive Support Vector Learning',
        authors: 'S. Karthikeyan, P. Geetha',
        received: '22 June 2024',
        accepted: '14 October 2025',
        published: '22 December 2025',
        volume: 2,
        issue: 2,
        year: 2025,
        pages: '177-184',
        doi: '10.62656/jcids.v2i2.16',
        file: '/2025/16.pdf',
        citation: 'V. Vasanthi, M. Karthi and Sivakumar Vengusamy, "Hybrid Recommendation Framework Combining Enhanced Density-Based Clustering and Transductive Support Vector Learning," Journal of Computational Intelligence and Decision Science (JCIDS), Vol. 02, Issue 2, pp. 90-107, 2025. https://doi.org/10.XXXX/jcids.2025.016'
      },
      {
        id: 17,
        type: 'Research Article',
        articleId: 'jcids.2025.007',
        title: 'Exploratory Study of Artificial Intelligence Techniques for Detecting Milk Adulteration in Food Safety',
        authors: 'Anand Nayyar, Shaik Khan Zakir, Shubha Singh',
        received: '06 August 2024',
        accepted: '17 October 2025',
        published: '22 December 2025',
        volume: 2,
        issue: 2,
        year: 2025,
        pages: '185-197',
        doi: '10.62656/jcids.v2i2.17',
        file: '/2025/17.pdf',
        citation: 'Sulochana V, S. Prabhu and Basheer Riskhan, "Exploratory Study of Artificial Intelligence Techniques for Detecting Milk Adulteration in Food Safety," Journal of Computational Intelligence and Decision Science (JCIDS), Vol. 02, Issue 2, pp. 108-120, 2025. https://doi.org/10.XXXX/jcids.2025.017'
      },
      {
        id: 18,
        type: 'Research Article',
        articleId: 'jcids.2025.008',
        title: 'Collaborative Mobility-Aware Resource Allocation Framework Using Evolutionary Lion Optimization for Next-Generation Mobile Networks',
        authors: 'V. Subramanian, R. Mohan',
        received: '26 July 2024',
        accepted: '21 October 2025',
        published: '22 December 2025',
        volume: 2,
        issue: 2,
        year: 2025,
        pages: '198-208',
        doi: '10.62656/jcids.v2i2.18',
        file: '/2025/18.pdf',
        citation: 'V. Bakyalakshmi, K. Brindha and Swamynathan Ramakrishnan, "Collaborative Mobility-Aware Resource Allocation Framework Using Evolutionary Lion Optimization for Next-Generation Mobile Networks," Journal of Computational Intelligence and Decision Science (JCIDS), Vol. 02, Issue 2, pp. 121-144, 2025. https://doi.org/10.XXXX/jcids.2025.018'
      },
      {
        id: 19,
        type: 'Research Article',
        articleId: 'jcids.2025.009',
        title: 'Optimized Feature Weighting Framework for Multi-Document Summarization Using Binary Swarm Intelligence Techniques',
        authors: 'K. Saranya, R. Saravanan',
        received: '11 July 2024',
        accepted: '23 October 2025',
        published: '22 December 2025',
        volume: 2,
        issue: 2,
        year: 2025,
        pages: '209-220',
        doi: '10.62656/jcids.v2i2.19',
        file: '/2025/19.pdf',
        citation: 'Vijayalakshmi P. S, P. Ananthi and Arokiaraj Selvaraj, "Optimized Feature Weighting Framework for Multi-Document Summarization Using Binary Swarm Intelligence Techniques," Journal of Computational Intelligence and Decision Science (JCIDS), Vol. 02, Issue 2, pp. 145-158, 2025. https://doi.org/10.XXXX/jcids.2025.019'
      },
      {
        id: 20,
        type: 'Research Article',
        articleId: 'jcids.2025.010',
        title: 'Refined Gabor Feature Extraction Combined with Optimized Bayesian Classification for Facial Expression Analysis',
        authors: 'R. Parvathi, J. Janet',
        received: '30 July 2024',
        accepted: '25 October 2025',
        published: '22 December 2025',
        volume: 2,
        issue: 2,
        year: 2025,
        pages: '221-231',
        doi: '10.62656/jcids.v2i2.20',
        file: '/2025/20.pdf',
        citation: 'K. Nirmala Devi, S. Thanga Prasath and Shanmugan Joghee, "Refined Gabor Feature Extraction Combined with Optimized Bayesian Classification for Facial Expression Analysis," Journal of Computational Intelligence and Decision Science (JCIDS), Vol. 02, Issue 2, pp. 159-175, 2025. https://doi.org/10.XXXX/jcids.2025.020'
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
              download={`${paper.articleId}.pdf`}
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
              background: '#f8fafc',
              padding: '25px',
              borderRadius: '10px',
              border: '1px solid #e2e8f0'
            }}>
              <ol style={{
                margin: 0,
                paddingLeft: '25px',
                listStyleType: 'decimal'
              }}>
                {(() => {
                  // Split references by looking for patterns like "1. ", "2. ", etc. at the start of lines
                  const refText = paper.references;
                  // Split on number followed by period and space (e.g., "1. ", "2. ")
                  const refs = refText.split(/\n(?=\d+\.\s)/);
                  
                  return refs
                    .map(ref => {
                      // Remove the numbering and clean up whitespace
                      return ref
                        .replace(/^\d+\.\s*/, '')  // Remove leading number
                        .replace(/\s+/g, ' ')       // Replace multiple spaces/newlines with single space
                        .trim();
                    })
                    .filter(ref => ref.length > 0)  // Remove empty entries
                    .map((reference, index) => (
                      <li key={index} style={{
                        marginBottom: '15px',
                        textAlign: 'justify',
                        textJustify: 'inter-word',
                        paddingLeft: '10px'
                      }}>
                        {reference}
                      </li>
                    ));
                })()}
              </ol>
            </div>
          </section>

          {/* Citation */}
          <section style={{ marginBottom: '45px' }}>
            <div style={{ 
              color: '#374151', 
              fontSize: '0.9rem', 
              fontWeight: '700',
              marginBottom: '10px',
              textTransform: 'uppercase',
              letterSpacing: '0.5px'
            }}>
              Cite This Article:
            </div>
            <div style={{ 
              padding: '15px',
              background: '#f3f4f6',
              borderLeft: '4px solid #2c4a80',
              borderRadius: '4px',
              fontSize: '0.9rem',
              color: '#374151',
              lineHeight: '1.7',
              fontStyle: 'italic',
              textAlign: 'justify'
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
              download={`${paper.articleId}.pdf`}
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
