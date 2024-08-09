import React from 'react';

const TermsOfUse = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Terms of Use</h1>
      <p style={styles.date}>Last Updated: [Date]</p>
      <section style={styles.section}>
        <h2 style={styles.heading}>1. Acceptance of Terms</h2>
        <p style={styles.text}>
          By using the Site, you agree to these Terms and our Privacy Policy. If you do not agree with these Terms, please do not use the Site.
        </p>
      </section>
      <section style={styles.section}>
        <h2 style={styles.heading}>2. Changes to Terms</h2>
        <p style={styles.text}>
          We may update these Terms from time to time. We will notify you of any changes by posting the new Terms on this page. You are advised to review these Terms periodically for any changes. Changes to these Terms are effective when they are posted on this page.
        </p>
      </section>
      <section style={styles.section}>
        <h2 style={styles.heading}>3. User Responsibilities</h2>
        <p style={styles.text}>
          You are responsible for:
          <ul style={styles.list}>
            <li>Maintaining the confidentiality of your account and password.</li>
            <li>Restricting access to your computer and account.</li>
            <li>Accepting responsibility for all activities that occur under your account.</li>
          </ul>
        </p>
      </section>
      <section style={styles.section}>
        <h2 style={styles.heading}>4. Prohibited Uses</h2>
        <p style={styles.text}>
          You agree not to use the Site for any unlawful or prohibited activities, including but not limited to:
          <ul style={styles.list}>
            <li>Violating any applicable laws or regulations.</li>
            <li>Engaging in any activity that could harm, disable, overburden, or impair the Site.</li>
            <li>Attempting to gain unauthorized access to any part of the Site, other accounts, or any computer systems or networks connected to the Site.</li>
          </ul>
        </p>
      </section>
      <section style={styles.section}>
        <h2 style={styles.heading}>5. Intellectual Property</h2>
        <p style={styles.text}>
          All content and materials on the Site, including but not limited to text, graphics, logos, and software, are the property of [Your Site Name] or its licensors and are protected by copyright, trademark, and other intellectual property laws. You may not use, reproduce, or distribute any content from the Site without our express written permission.
        </p>
      </section>
      <section style={styles.section}>
        <h2 style={styles.heading}>6. Links to Third-Party Sites</h2>
        <p style={styles.text}>
          The Site may contain links to third-party websites or services that are not owned or controlled by [Your Site Name]. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party websites or services. You acknowledge and agree that [Your Site Name] is not responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such websites or services.
        </p>
      </section>
      <section style={styles.section}>
        <h2 style={styles.heading}>7. Disclaimer of Warranties</h2>
        <p style={styles.text}>
          The Site is provided on an "as is" and "as available" basis. [Your Site Name] makes no warranties, express or implied, regarding the Site or its content, including but not limited to any warranties of accuracy, reliability, or availability. [Your Site Name] does not warrant that the Site will be uninterrupted or error-free.
        </p>
      </section>
      <section style={styles.section}>
        <h2 style={styles.heading}>8. Limitation of Liability</h2>
        <p style={styles.text}>
          To the maximum extent permitted by law, [Your Site Name] shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from:
          <ul style={styles.list}>
            <li>Your use or inability to use the Site.</li>
            <li>Any unauthorized access to or use of our servers and/or any personal information stored therein.</li>
            <li>Any interruption or cessation of transmission to or from the Site.</li>
          </ul>
        </p>
      </section>
      <section style={styles.section}>
        <h2 style={styles.heading}>9. Indemnification</h2>
        <p style={styles.text}>
          You agree to indemnify, defend, and hold harmless [Your Site Name], its affiliates, officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses, including reasonable attorneys' fees, arising out of or in any way connected with your access to or use of the Site, your violation of these Terms, or your infringement of any intellectual property or other rights of any person or entity.
        </p>
      </section>
      <section style={styles.section}>
        <h2 style={styles.heading}>10. Governing Law</h2>
        <p style={styles.text}>
          These Terms are governed by and construed in accordance with the laws of [Your State/Country], without regard to its conflict of law principles. Any legal action or proceeding arising out of or relating to these Terms or your use of the Site shall be brought exclusively in the courts located in [Your State/Country].
        </p>
      </section>
      <section style={styles.section}>
        <h2 style={styles.heading}>11. Contact Us</h2>
        <p style={styles.text}>
          If you have any questions about these Terms, please contact us at:
          <br />
          [Your Site Name]
          <br />
          [Your Contact Email]
          <br />
          [Your Contact Address]
        </p>
      </section>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    maxWidth: '800px',
    margin: '0 auto',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  title: {
    fontSize: '32px',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '20px',
  },
  date: {
    textAlign: 'center',
    marginBottom: '30px',
    fontStyle: 'italic',
  },
  section: {
    marginBottom: '20px',
  },
  heading: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  text: {
    fontSize: '16px',
    lineHeight: '1.6',
    marginBottom: '10px',
  },
  list: {
    marginLeft: '20px',
  },
};

export default TermsOfUse;
