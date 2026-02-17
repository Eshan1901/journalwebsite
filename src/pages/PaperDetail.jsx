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
        title: 'Hybrid Stacked Ensemble Approach with AdaBoost for Accurate Cryptocurrency Price Prediction',
        authors: 'Ashima Kukkar, Shweta Sankhwar, Prakhar Rathore, Akshay Kumar Gupta, Sweta Sinha',
        received: '09 June 2024',
        accepted: '25 December 2024',
        published: '14 January 2026',
        volume: 1,
        issue: 1,
        year: 2024,
        pages: '1-17',
        doi: '10.62656/jcids.v1i1.1',
        file: '/2024/1.pdf',
        citation: 'Kukkar A, Sankhwar S, Rathore P, Gupta AK, Sinha S. Hybrid stacked ensemble approach with AdaBoost for accurate cryptocurrency price prediction. J Comput Intell Decis Sci. 2024;1(1):1.'
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
        title: 'Forecasting of Univariate Time Series using Hybrid Deep Learning Technique',
        authors: 'Mohit Mittal, Rohit Beniwal, Nitin Mittal, Akshay Kumar Gupta',
        received: '16 July 2024',
        accepted: '07 August 2024',
        published: '30 December 2024',
        volume: 1,
        issue: 1,
        year: 2024,
        pages: '29-40',
        doi: '10.62656/jcids.v1i1.3',
        file: '/2024/3.pdf',
        citation: 'Mittal M, Beniwal R, Mittal N, Gupta AK. Forecasting of univariate time series using hybrid deep learning technique. J Comput Intell Decis Sci. 2024;1(1):3.'
      },
      {
        id: 4,
        type: 'Research Article',
        articleId: 'jcids.2024.004',
        title: 'Semantic Feature-based Improved Word Sense Disambiguation using Deep Convolutional Neural Network',
        authors: 'Sanjeev Sharma, Deepak Kumar Sharma',
        received: '12 August 2024',
        accepted: '24 September 2024',
        published: '30 December 2024',
        volume: 1,
        issue: 1,
        year: 2024,
        pages: '41-49',
        doi: '10.62656/jcids.v1i1.4',
        file: '/2024/4.pdf',
        citation: 'Sharma S, Sharma DK. Semantic feature-based improved word sense disambiguation using deep convolutional neural network. J Comput Intell Decis Sci. 2024;1(1):4.'
      },
      {
        id: 5,
        type: 'Research Article',
        articleId: 'jcids.2024.005',
        title: 'Advanced Techniques in Multiobjective Feature Selection: Comparative Analysis and Future Directions',
        authors: 'Madjid Khalilian, Norwati Mustapha, Md Nasir Sulaiman, Abbas Khosravi',
        received: '20 August 2024',
        accepted: '10 September 2024',
        published: '30 December 2024',
        volume: 1,
        issue: 1,
        year: 2024,
        pages: '50-63',
        doi: '10.62656/jcids.v1i1.5',
        file: '/2024/5.pdf',
        citation: 'Khalilian M, Mustapha N, Sulaiman MN, Khosravi A. Advanced techniques in multiobjective feature selection: comparative analysis and future directions. J Comput Intell Decis Sci. 2024;1(1):5.'
      },
      {
        id: 6,
        type: 'Research Article',
        articleId: 'jcids.2024.006',
        title: 'Optimizing Artificial Neural Networks: A Comparative Analysis of Algorithms',
        authors: 'Abdelmonaim Lahdoud, Mohammed Bennamoun',
        received: '05 September 2024',
        accepted: '10 October 2024',
        published: '30 December 2024',
        volume: 1,
        issue: 1,
        year: 2024,
        pages: '64-72',
        doi: '10.62656/jcids.v1i1.6',
        file: '/2024/6.pdf',
        citation: 'Lahdoud A, Bennamoun M. Optimizing artificial neural networks: a comparative analysis of algorithms. J Comput Intell Decis Sci. 2024;1(1):6.'
      },
      {
        id: 7,
        type: 'Research Article',
        articleId: 'jcids.2024.007',
        title: 'Load Balanced Spectrum Allocation Approach Using Intelligent Water Drops in Cognitive Radio Network',
        authors: 'E. Suganya, P. Anitha',
        received: '09 September 2024',
        accepted: '08 October 2024',
        published: '30 December 2024',
        volume: 1,
        issue: 1,
        year: 2024,
        pages: '73-85',
        doi: '10.62656/jcids.v1i1.7',
        file: '/2024/7.pdf',
        citation: 'Suganya E, Anitha P. Load balanced spectrum allocation approach using intelligent water drops in cognitive radio network. J Comput Intell Decis Sci. 2024;1(1):7.'
      },
      {
        id: 8,
        type: 'Research Article',
        articleId: 'jcids.2024.008',
        title: 'Machine Learning: A New Technique for Emotion Recognition by Facial Recognition',
        authors: 'Vandna Sharma, Kusum Grewal, Krishna Kant',
        received: '12 October 2024',
        accepted: '20 December 2024',
        published: '30 December 2024',
        volume: 1,
        issue: 1,
        year: 2024,
        pages: '86-96',
        doi: '10.62656/jcids.v1i1.8',
        file: '/2024/8.pdf',
        citation: 'Sharma V, Grewal K, Kant K. Machine learning: a new technique for emotion recognition by facial recognition. J Comput Intell Decis Sci. 2024;1(1):8.'
      },
      {
        id: 9,
        type: 'Research Article',
        articleId: 'jcids.2024.009',
        title: 'Cyber Attack Detection Using Deep Learning Techniques',
        authors: 'Keshav Kaushik, Kamna Solanki, Akshay Singhal, Sachin Lalar, Manoj Kumar',
        received: '19 October 2024',
        accepted: '01 November 2024',
        published: '30 December 2024',
        volume: 1,
        issue: 1,
        year: 2024,
        pages: '97-104',
        doi: '10.62656/jcids.v1i1.9',
        file: '/2024/9.pdf',
        citation: 'Kaushik K, Solanki K, Singhal A, Lalar S, Kumar M. Cyber attack detection using deep learning techniques. J Comput Intell Decis Sci. 2024;1(1):9.'
      },
      {
        id: 10,
        type: 'Research Article',
        articleId: 'jcids.2024.010',
        title: 'Improving Question Answering through Soft Computing, Lemmatization, and Parsing Technique',
        authors: 'Vandana Niranjan, Deepti Mehrotra',
        received: '08 November 2024',
        accepted: '25 November 2024',
        published: '30 December 2024',
        volume: 1,
        issue: 1,
        year: 2024,
        pages: '105-117',
        doi: '10.62656/jcids.v1i1.10',
        file: '/2024/10.pdf',
        citation: 'Niranjan V, Mehrotra D. Improving question answering through soft computing, lemmatization, and parsing technique. J Comput Intell Decis Sci. 2024;1(1):10.'
      }
    ];

    const papers2025 = [
      {
        id: 11,
        type: 'Research Article',
        articleId: 'jcids.2025.001',
        title: 'Enhanced Query Expansion Model For Retrieving Relevant Medical Documents',
        authors: 'Ajantha Devi V, R. Rajeswara Rao',
        received: '12 November 2024',
        accepted: '20 December 2024',
        published: '14 January 2026',
        volume: 1,
        issue: 2,
        year: 2025,
        pages: '118-132',
        doi: '10.62656/jcids.v1i2.11',
        file: '/2025/11.pdf',
        citation: 'Ajantha Devi V, Rajeswara Rao R. Enhanced query expansion model for retrieving relevant medical documents. J Comput Intell Decis Sci. 2025;1(2):11.'
      },
      {
        id: 12,
        type: 'Research Article',
        articleId: 'jcids.2025.002',
        title: 'Efficient VLSI Architecture for Multi-Criteria Sorting, Searching and Finding Maximum Value',
        authors: 'John Z. F. Pang, W. Z. Zhu',
        received: '18 November 2024',
        accepted: '28 December 2024',
        published: '14 January 2026',
        volume: 1,
        issue: 2,
        year: 2025,
        pages: '133-150',
        doi: '10.62656/jcids.v1i2.12',
        file: '/2025/12.pdf',
        citation: 'Pang JZF, Zhu WZ. Efficient VLSI architecture for multi-criteria sorting, searching and finding maximum value. J Comput Intell Decis Sci. 2025;1(2):12.'
      },
      {
        id: 13,
        type: 'Research Article',
        articleId: 'jcids.2025.003',
        title: 'Senti-N: An Algorithm for Sentiment Analysis of Tweets using Afinn-165 Wordlist',
        authors: 'Ashwini Kodipalli, Shweta Taneja',
        received: '25 November 2024',
        accepted: '05 January 2025',
        published: '14 January 2026',
        volume: 1,
        issue: 2,
        year: 2025,
        pages: '151-157',
        doi: '10.62656/jcids.v1i2.13',
        file: '/2025/13.pdf',
        citation: 'Kodipalli A, Taneja S. Senti-N: an algorithm for sentiment analysis of tweets using Afinn-165 wordlist. J Comput Intell Decis Sci. 2025;1(2):13.'
      },
      {
        id: 14,
        type: 'Research Article',
        articleId: 'jcids.2025.004',
        title: 'Sentiment Analysis on Big Data Using HDFS and MapReduce Framework',
        authors: 'Upendra Singh, Sandeep Harit',
        received: '02 December 2024',
        accepted: '10 January 2025',
        published: '14 January 2026',
        volume: 1,
        issue: 2,
        year: 2025,
        pages: '158-167',
        doi: '10.62656/jcids.v1i2.14',
        file: '/2025/14.pdf',
        citation: 'Singh U, Harit S. Sentiment analysis on big data using HDFS and MapReduce framework. J Comput Intell Decis Sci. 2025;1(2):14.'
      },
      {
        id: 15,
        type: 'Research Article',
        articleId: 'jcids.2025.005',
        title: 'Sentiment Analysis of Social Media Content for Disaster Management',
        authors: 'Nishtha Jatana, Deepti Malik, Bhavya Dabas',
        received: '08 December 2024',
        accepted: '12 January 2025',
        published: '14 January 2026',
        volume: 1,
        issue: 2,
        year: 2025,
        pages: '168-176',
        doi: '10.62656/jcids.v1i2.15',
        file: '/2025/15.pdf',
        citation: 'Jatana N, Malik D, Dabas B. Sentiment analysis of social media content for disaster management. J Comput Intell Decis Sci. 2025;1(2):15.'
      },
      {
        id: 16,
        type: 'Research Article',
        articleId: 'jcids.2025.006',
        title: 'Student Academic Performance Prediction Through Computational Intelligence',
        authors: 'Maya Nayak G, G. Amarnath, V. Sumalatha',
        received: '15 December 2024',
        accepted: '15 January 2025',
        published: '14 January 2026',
        volume: 1,
        issue: 2,
        year: 2025,
        pages: '177-184',
        doi: '10.62656/jcids.v1i2.16',
        file: '/2025/16.pdf',
        citation: 'Maya Nayak G, Amarnath G, Sumalatha V. Student academic performance prediction through computational intelligence. J Comput Intell Decis Sci. 2025;1(2):16.'
      },
      {
        id: 17,
        type: 'Research Article',
        articleId: 'jcids.2025.007',
        title: 'Hybrid Intrusion Detection System Using Machine Learning Techniques',
        authors: 'M. Govindarajan',
        received: '22 December 2024',
        accepted: '18 January 2025',
        published: '14 January 2026',
        volume: 1,
        issue: 2,
        year: 2025,
        pages: '185-197',
        doi: '10.62656/jcids.v1i2.17',
        file: '/2025/17.pdf',
        citation: 'Govindarajan M. Hybrid intrusion detection system using machine learning techniques. J Comput Intell Decis Sci. 2025;1(2):17.'
      },
      {
        id: 18,
        type: 'Research Article',
        articleId: 'jcids.2025.008',
        title: 'Smart Health Monitoring System Based on Predictive and Contextual Analysis',
        authors: 'Richa Gupta, Deepti Sharma',
        received: '28 December 2024',
        accepted: '20 January 2025',
        published: '14 January 2026',
        volume: 1,
        issue: 2,
        year: 2025,
        pages: '198-208',
        doi: '10.62656/jcids.v1i2.18',
        file: '/2025/18.pdf',
        citation: 'Gupta R, Sharma D. Smart health monitoring system based on predictive and contextual analysis. J Comput Intell Decis Sci. 2025;1(2):18.'
      },
      {
        id: 19,
        type: 'Research Article',
        articleId: 'jcids.2025.009',
        title: 'A Multi-Feature Fusion Framework for Enhancing Image Classification Accuracy',
        authors: 'Manish Sharma, Rinkle Rani',
        received: '04 January 2025',
        accepted: '23 January 2025',
        published: '14 January 2026',
        volume: 1,
        issue: 2,
        year: 2025,
        pages: '209-220',
        doi: '10.62656/jcids.v1i2.19',
        file: '/2025/19.pdf',
        citation: 'Sharma M, Rani R. A multi-feature fusion framework for enhancing image classification accuracy. J Comput Intell Decis Sci. 2025;1(2):19.'
      },
      {
        id: 20,
        type: 'Research Article',
        articleId: 'jcids.2025.010',
        title: 'Deep Neural Networks for Automatic Speaker Recognition',
        authors: 'Soumi Chattopadhyay, Priyanka Singh',
        received: '10 January 2025',
        accepted: '25 January 2025',
        published: '14 January 2026',
        volume: 1,
        issue: 2,
        year: 2025,
        pages: '221-231',
        doi: '10.62656/jcids.v1i2.20',
        file: '/2025/20.pdf',
        citation: 'Chattopadhyay S, Singh P. Deep neural networks for automatic speaker recognition. J Comput Intell Decis Sci. 2025;1(2):20.'
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
              onClick={() => navigate('/journals')}
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
            Volume {paper.volume} | Issue {paper.issue} | Year {paper.year} | Pages {paper.pages} | Article Id. {paper.articleId}
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
              whiteSpace: 'pre-wrap',
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
              whiteSpace: 'pre-wrap',
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
